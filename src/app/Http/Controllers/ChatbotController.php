<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    public function proxyRequest(Request $request)
    {
        try {
            Log::info('Chatbot query: ' . $request->input('query'));

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . config('services.dify.api_key'),
                'Content-Type' => 'application/json',
            ])->post(config('services.dify.endpoint') . '/chat-messages', [
                        'query' => $request->input('query'),
                        'inputs' => [],
                        'user' => [
                            'user_id' => auth()->check() ? 'user_' . auth()->id() : 'guest_' . session()->getId(),
                        ],
                        'response_mode' => 'blocking'
                    ]);

            Log::info('Dify response: ' . $response->body());

            $responseData = $response->json();
            $answer = '';

            if (isset($responseData['answer'])) {
                $answer = $responseData['answer'];
            } elseif (isset($responseData['message'])) {
                $answer = 'APIエラー:' . $responseData['message'];
            } else {
                $answer = 'レスポンスの形式が正しくありません。';
            }

            return response()->json([
                'answer' => $answer,
                'raw_response' => $responseData
            ]);

        } catch (\Exception $e) {
            Log::error('Chatbot error: ' . $e->getMessage());
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
                'answer' => 'すみません、サービスに接続できませんでした。後ほど再度お試しください。'
            ], 500);
        }
    }
}
