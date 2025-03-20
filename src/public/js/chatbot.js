document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendMessage = document.getElementById('send-message');

    chatToggle.addEventListener('click', function() {
        chatContainer.style.display = 'block';
    });

    closeChat.addEventListener('click', function() {
        chatContainer.style.display = 'none';
    });

    function sendChatMessage() {
        const message = chatInput.value.trim();
        if(!message) return;

        addMessageToChat('user', message);
        chatInput.value = '';

        const loadingId = 'loading-' + Date.now();
        addMessageToChat('bot', '...', loadingId);

        fetch('/api/chat-proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({
                query: message
            })
        })
        .then(response => response.json())
        .then(data => {
            const loadingElement = document.getElementById(loadingId);
            if(loadingElement) {
                loadingElement.remove();
            }

            console.log('API response:', data);

            if(data && data.answer) {
                addMessageToChat('bot', data.answer);
            }else if(data && data.raw_response){
                console.error('Raw response:', data.raw_response);
                addMessageToChat('bot', 'APIからの応答形式が正しくありません。管理者にお問い合わせください。');
            }else {
                addMessageToChat('bot', 'すみません、適切な回答が見つかりませんでした。');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            addMessageToChat('bot', 'すみません、エラーが発生しました。後でもう一度お試しください。');
        });

        setTimeout(() => {
            scrollToBottom();
        }, 100);
    }

    function addMessageToChat(sender, text, elementId = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        if(elementId) {
            messageDiv.id = elementId;
        }
        messageDiv.innerHTML = `<p>${text || 'メッセージを読み込めませんでした'}</p>`;
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendMessage.addEventListener('click', sendChatMessage);

    chatInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            sendChatMessage();
        }
    });

    addMessageToChat('bot', 'こんにちは! Reseアプリのサポートアシスタントです。機能についてご質問があればお気軽にどうぞ。');
});

