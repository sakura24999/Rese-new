commit 549aac53096235550bb6b57503723818aa1ac788
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sun Mar 2 22:16:07 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index a6f0b26..c2420e1 100644
--- a/README.md
+++ b/README.md
@@ -86,7 +86,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 #### 管理機能
 
-・管理者向け管理画面
+・管理者向け管理画面（admin@example.com / password123 でログイン可能）
 
 ・ストレージへの保存
 

commit 9bce7a8b04d229663233bb8a7feef5b17a0b9513
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 21:41:51 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 0d02a61..a6f0b26 100644
--- a/README.md
+++ b/README.md
@@ -37,7 +37,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 以下はプロジェクトのER図です：
 
-<img width="1265" alt="ER図" src="/Users/sakura/Desktop/Rese/rese-app/images/dbdiagram-rese.png" />
+![ER図](images/dbdiagram-rese.png)
 
 
 ## 📋 機能一覧

commit 5e1335c11927a8257d80e230ff705d9528aaf4ff
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 19:27:01 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 2d3dcf5..0d02a61 100644
--- a/README.md
+++ b/README.md
@@ -125,37 +125,37 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・MySQL
 
-### インストール手順
+## インストール手順
 
-1.リポジトリのクローン
+### 1.リポジトリのクローン
 
 git clone https://github.com/sakura24999/Rese.git
 
 cd Rese
 
-2.環境変数の設定
+### 2.環境変数の設定
 
 cp .env.example .env
 
-3.依存パッケージのインストール
+### 3.依存パッケージのインストール
 
 composer install
 
 npm install
 
-4.アプリケーションキーの生成
+### 4.アプリケーションキーの生成
 
 php artisan key:generate
 
-5.データベースのマイグレーション
+### 5.データベースのマイグレーション
 
 php artisan migrate --seed
 
-6.開発サーバーの起動
+### 6.開発サーバーの起動
 
 php artisan serve
 
-7.Mailhogの確認方法
+### 7.Mailhogの確認方法
 
 メール送信機能をテストする場合は、Mailhogを使用しています。
 

commit 8b40356d67fc47e31d69191ee091e2ca47ad0ffe
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 19:23:17 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 05e3dcc..2d3dcf5 100644
--- a/README.md
+++ b/README.md
@@ -42,9 +42,9 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ## 📋 機能一覧
 
-✅ 実装済み機能
+### ✅ 実装済み機能
 
-### ユーザー機能
+#### ユーザー機能
 
 ・会員登録（Fortifyを使用）
 
@@ -76,7 +76,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・店名で検索する
 
-### 予約関連機能
+#### 予約関連機能
 
 ・予約したお店に来店した後に、利用者が店舗を5段階評価とコメントができるようにする（評価機能）
 
@@ -84,7 +84,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・マイページの予約状況からORコードの発行が可能
 
-### 管理機能
+#### 管理機能
 
 ・管理者向け管理画面
 
@@ -94,11 +94,11 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・リマインダー送信
 
-### フロントエンド
+#### フロントエンド
 
 ・レスポンシブデザイン対応
 
-### 認証
+#### 認証
 
 ・メールによって本人確認を行うことができる
 

commit 78d159c0d3312058c40ccdce1bca468f7199c64c
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 19:21:02 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 31a1a58..05e3dcc 100644
--- a/README.md
+++ b/README.md
@@ -1,10 +1,10 @@
 ## Rese（リーズ）
 
-📝 概要
+### 📝 概要
 
 Reseは企業のグループ会社向けに開発された飲食店予約サービスです。外部の飲食店予約サービスでは手数料が発生するため、自社でサービスを構築・運営することでコスト削減を実現します。
 
-🌟 主な特徴
+### 🌟 主な特徴
 
 ・グループ会社専用の飲食店予約システム
 
@@ -14,7 +14,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・初年度ユーザー数10,000人を目標
 
-🔧 使用技術
+### 🔧 使用技術
 
 バックエンド
 ・PHP

commit 0cfecc8bdd0a36a9e831d39892a46d0312b31cf0
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 19:19:44 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index ceac39d..31a1a58 100644
--- a/README.md
+++ b/README.md
@@ -44,7 +44,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ✅ 実装済み機能
 
-【ユーザー機能】
+### ユーザー機能
 
 ・会員登録（Fortifyを使用）
 
@@ -76,7 +76,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・店名で検索する
 
-【予約関連機能】
+### 予約関連機能
 
 ・予約したお店に来店した後に、利用者が店舗を5段階評価とコメントができるようにする（評価機能）
 
@@ -84,7 +84,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・マイページの予約状況からORコードの発行が可能
 
-【管理機能】
+### 管理機能
 
 ・管理者向け管理画面
 
@@ -94,26 +94,26 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・リマインダー送信
 
-【フロントエンド】
+### フロントエンド
 
 ・レスポンシブデザイン対応
 
-【認証】
+### 認証
 
 ・メールによって本人確認を行うことができる
 
 
-🎯 ターゲットユーザー
+## 🎯 ターゲットユーザー
 
 ・20〜30代の社会人
 
 ・グループ企業に所属する従業員
 
-💻 動作環境
+## 💻 動作環境
 
 ・PC: Chrome/Firefox/Safari 最新バージョン
 
-🚀 セットアップ手順
+## 🚀 セットアップ手順
 
 必要要件
 
@@ -125,31 +125,42 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 ・MySQL
 
-【インストール手順】
+### インストール手順
 
 1.リポジトリのクローン
+
 git clone https://github.com/sakura24999/Rese.git
+
 cd Rese
 
 2.環境変数の設定
+
 cp .env.example .env
 
 3.依存パッケージのインストール
+
 composer install
+
 npm install
 
 4.アプリケーションキーの生成
+
 php artisan key:generate
 
 5.データベースのマイグレーション
+
 php artisan migrate --seed
 
 6.開発サーバーの起動
+
 php artisan serve
 
 7.Mailhogの確認方法
+
 メール送信機能をテストする場合は、Mailhogを使用しています。
+
 送信されたメールは以下のURLでアクセスして確認できます：
+
 http://localhost:8025
 
 

commit c89422a6162189d918019ff12ad749c33da532a6
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 19:12:20 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 6697af6..ceac39d 100644
--- a/README.md
+++ b/README.md
@@ -1,65 +1,97 @@
-Rese（リーズ）
+## Rese（リーズ）
 
 📝 概要
 
 Reseは企業のグループ会社向けに開発された飲食店予約サービスです。外部の飲食店予約サービスでは手数料が発生するため、自社でサービスを構築・運営することでコスト削減を実現します。
 
 🌟 主な特徴
+
 ・グループ会社専用の飲食店予約システム
+
 ・手数料なしで予約可能
+
 ・シンプルで使いやすいインターフェース
+
 ・初年度ユーザー数10,000人を目標
 
 🔧 使用技術
+
 バックエンド
 ・PHP
+
 ・Laravel（認証にはFortifyを使用）
+
 ・MySQL
 
 フロントエンド
+
 ・レスポンシブデザイン（ブレイクポイント768px）
+
 ・タブレット・スマートフォン対応
 
 インフラ・開発環境
+
 ・GitHub（バージョン管理）
 
-## データベース設計
+## 💻 データベース設計
 
 以下はプロジェクトのER図です：
 
 <img width="1265" alt="ER図" src="/Users/sakura/Desktop/Rese/rese-app/images/dbdiagram-rese.png" />
 
-📋 機能一覧
+
+## 📋 機能一覧
+
 ✅ 実装済み機能
+
 【ユーザー機能】
 
 ・会員登録（Fortifyを使用）
+
 ・ログイン
+
 ・ログアウト
+
 ・ユーザー情報取得
+
 ・ユーザー飲食店お気に入り一覧取得
+
 ・ユーザー飲食店予約情報取得
+
 ・飲食店一覧取得
+
 ・飲食店詳細取得
+
 ・飲食店お気に入り追加
+
 ・飲食店お気に入り削除
+
 ・飲食店予約情報追加
+
 ・飲食店予約情報削除
+
 ・エリアで検索する
+
 ・ジャンルで検索する
+
 ・店名で検索する
 
 【予約関連機能】
 
 ・予約したお店に来店した後に、利用者が店舗を5段階評価とコメントができるようにする（評価機能）
+
 ・マイページの予約状況から「予約日」「時間」「人数」の変更が可能
+
 ・マイページの予約状況からORコードの発行が可能
 
 【管理機能】
 
 ・管理者向け管理画面
+
 ・ストレージへの保存
+
 ・お知らせメールの送信
+
 ・リマインダー送信
 
 【フロントエンド】
@@ -74,6 +106,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 🎯 ターゲットユーザー
 
 ・20〜30代の社会人
+
 ・グループ企業に所属する従業員
 
 💻 動作環境
@@ -81,11 +114,15 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 ・PC: Chrome/Firefox/Safari 最新バージョン
 
 🚀 セットアップ手順
+
 必要要件
 
 ・PHP（Laravelの動作要件を満たすバージョン）
+
 ・Composer
+
 ・Node.js & npm
+
 ・MySQL
 
 【インストール手順】

commit d8141b6bde0f2e2671d72f47a354f27f31de9876
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 19:02:15 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 4686552..6697af6 100644
--- a/README.md
+++ b/README.md
@@ -1,6 +1,7 @@
 Rese（リーズ）
 
 📝 概要
+
 Reseは企業のグループ会社向けに開発された飲食店予約サービスです。外部の飲食店予約サービスでは手数料が発生するため、自社でサービスを構築・運営することでコスト削減を実現します。
 
 🌟 主な特徴

commit 9347549fd88451184abab703972e2ae634019dd1
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 19:00:55 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index deb9f87..4686552 100644
--- a/README.md
+++ b/README.md
@@ -51,10 +51,15 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 【予約関連機能】
 
 ・予約したお店に来店した後に、利用者が店舗を5段階評価とコメントができるようにする（評価機能）
+・マイページの予約状況から「予約日」「時間」「人数」の変更が可能
+・マイページの予約状況からORコードの発行が可能
 
 【管理機能】
 
 ・管理者向け管理画面
+・ストレージへの保存
+・お知らせメールの送信
+・リマインダー送信
 
 【フロントエンド】
 

commit 03ad41dbb2fc815aa11b06e7690e7fa34cadc616
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 18:40:02 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 91cb92d..deb9f87 100644
--- a/README.md
+++ b/README.md
@@ -26,7 +26,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 以下はプロジェクトのER図です：
 
-<img width="1265" alt="ER図" src="./Users/sakura/Desktop/Rese/rese-app/images/dbdiagram-rese.png" />
+<img width="1265" alt="ER図" src="/Users/sakura/Desktop/Rese/rese-app/images/dbdiagram-rese.png" />
 
 📋 機能一覧
 ✅ 実装済み機能

commit 7d6f5c3c71c912046a25550190ea69a9ac33feaa
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 18:39:34 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index e40f466..91cb92d 100644
--- a/README.md
+++ b/README.md
@@ -26,8 +26,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 以下はプロジェクトのER図です：
 
-<img width="1265" alt="ER図" src="./images/dbdiagram-rese.png" />
-/Users/sakura/Desktop/Rese/rese-app/images/dbdiagram-rese.png
+<img width="1265" alt="ER図" src="./Users/sakura/Desktop/Rese/rese-app/images/dbdiagram-rese.png" />
 
 📋 機能一覧
 ✅ 実装済み機能

commit 49d70997b08f15e81b9ef3dedcfa931cfdc62563
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 18:38:55 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 46340e2..e40f466 100644
--- a/README.md
+++ b/README.md
@@ -27,6 +27,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 以下はプロジェクトのER図です：
 
 <img width="1265" alt="ER図" src="./images/dbdiagram-rese.png" />
+/Users/sakura/Desktop/Rese/rese-app/images/dbdiagram-rese.png
 
 📋 機能一覧
 ✅ 実装済み機能

commit 575efd927fc711aca998601757cbc12b8168cf67
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 18:37:25 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index fdb66b3..46340e2 100644
--- a/README.md
+++ b/README.md
@@ -26,7 +26,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 以下はプロジェクトのER図です：
 
-<img width="1265" alt="Image" src="./images/ER図（Rese）.png" />
+<img width="1265" alt="ER図" src="./images/dbdiagram-rese.png" />
 
 📋 機能一覧
 ✅ 実装済み機能

commit 339f49a018560ac0552d286e7df79b9c3f446fc0
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Sat Mar 1 18:34:31 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index a1e1270..fdb66b3 100644
--- a/README.md
+++ b/README.md
@@ -26,7 +26,7 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 
 以下はプロジェクトのER図です：
 
-<img width="1265" alt="Image" src="https://github.com/user-attachments/assets/7a3c92a0-c88f-4cde-8687-b461586ca5c7" />
+<img width="1265" alt="Image" src="./images/ER図（Rese）.png" />
 
 📋 機能一覧
 ✅ 実装済み機能

commit 59ec5ffe67e8b6c425633e4e2867939ed0af0d26
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Tue Feb 25 00:38:08 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index 83851e2..a1e1270 100644
--- a/README.md
+++ b/README.md
@@ -22,6 +22,12 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 インフラ・開発環境
 ・GitHub（バージョン管理）
 
+## データベース設計
+
+以下はプロジェクトのER図です：
+
+<img width="1265" alt="Image" src="https://github.com/user-attachments/assets/7a3c92a0-c88f-4cde-8687-b461586ca5c7" />
+
 📋 機能一覧
 ✅ 実装済み機能
 【ユーザー機能】

commit 6b9fc26ba51737d4e95a252f803fd998cc538f19
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Tue Feb 25 00:03:58 2025 +0900

    Update README.md

diff --git a/README.md b/README.md
index f514dc3..83851e2 100644
--- a/README.md
+++ b/README.md
@@ -57,3 +57,50 @@ Reseは企業のグループ会社向けに開発された飲食店予約サー
 【認証】
 
 ・メールによって本人確認を行うことができる
+
+
+🎯 ターゲットユーザー
+
+・20〜30代の社会人
+・グループ企業に所属する従業員
+
+💻 動作環境
+
+・PC: Chrome/Firefox/Safari 最新バージョン
+
+🚀 セットアップ手順
+必要要件
+
+・PHP（Laravelの動作要件を満たすバージョン）
+・Composer
+・Node.js & npm
+・MySQL
+
+【インストール手順】
+
+1.リポジトリのクローン
+git clone https://github.com/sakura24999/Rese.git
+cd Rese
+
+2.環境変数の設定
+cp .env.example .env
+
+3.依存パッケージのインストール
+composer install
+npm install
+
+4.アプリケーションキーの生成
+php artisan key:generate
+
+5.データベースのマイグレーション
+php artisan migrate --seed
+
+6.開発サーバーの起動
+php artisan serve
+
+7.Mailhogの確認方法
+メール送信機能をテストする場合は、Mailhogを使用しています。
+送信されたメールは以下のURLでアクセスして確認できます：
+http://localhost:8025
+
+

commit 8c083553042e276ebbbf61fe9166262f14b7ed20
Author: sakura24999 <onepicelove0731@gmail.com>
Date:   Mon Feb 24 23:46:33 2025 +0900

    Create README.md

diff --git a/README.md b/README.md
new file mode 100644
index 0000000..f514dc3
--- /dev/null
+++ b/README.md
@@ -0,0 +1,59 @@
+Rese（リーズ）
+
+📝 概要
+Reseは企業のグループ会社向けに開発された飲食店予約サービスです。外部の飲食店予約サービスでは手数料が発生するため、自社でサービスを構築・運営することでコスト削減を実現します。
+
+🌟 主な特徴
+・グループ会社専用の飲食店予約システム
+・手数料なしで予約可能
+・シンプルで使いやすいインターフェース
+・初年度ユーザー数10,000人を目標
+
+🔧 使用技術
+バックエンド
+・PHP
+・Laravel（認証にはFortifyを使用）
+・MySQL
+
+フロントエンド
+・レスポンシブデザイン（ブレイクポイント768px）
+・タブレット・スマートフォン対応
+
+インフラ・開発環境
+・GitHub（バージョン管理）
+
+📋 機能一覧
+✅ 実装済み機能
+【ユーザー機能】
+
+・会員登録（Fortifyを使用）
+・ログイン
+・ログアウト
+・ユーザー情報取得
+・ユーザー飲食店お気に入り一覧取得
+・ユーザー飲食店予約情報取得
+・飲食店一覧取得
+・飲食店詳細取得
+・飲食店お気に入り追加
+・飲食店お気に入り削除
+・飲食店予約情報追加
+・飲食店予約情報削除
+・エリアで検索する
+・ジャンルで検索する
+・店名で検索する
+
+【予約関連機能】
+
+・予約したお店に来店した後に、利用者が店舗を5段階評価とコメントができるようにする（評価機能）
+
+【管理機能】
+
+・管理者向け管理画面
+
+【フロントエンド】
+
+・レスポンシブデザイン対応
+
+【認証】
+
+・メールによって本人確認を行うことができる
