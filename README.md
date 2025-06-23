# Warikan Calculator - シンプル割り勘計算アプリ

[![Deploy on GitHub Pages](https.://img.shields.io/badge/Live%20Demo-nanaism.github.io-green?style=for-the-badge&logo=github)](https://nanaism.github.io/warikan-culculator/)

旅行や飲み会など、複数人での立て替えが発生した際の面倒な割り勘計算を、シンプルかつスマートに解決するウェブアプリケーションです。
誰が誰にいくら支払えばよいかを瞬時に算出し、精算をスムーズにします。

**👇 今すぐサイトを体験！**
### [https://nanaism.github.io/warikan-culculator/](https://nanaism.github.io/warikan-culculator/)

![割り勘計算アプリのスクリーンショット](https://github.com/user-attachments/assets/5b7a3fa2-9c05-4df2-9e53-c5df5872695a)

---

## 🌟 プロジェクトの特徴 (Features)

このアプリは、ユーザーが直面する「割り勘」という課題を解決するために、必要十分な機能に絞って設計されています。

-   **👤 簡単なメンバー管理**
    -   割り勘に参加するメンバーを自由に追加・管理できます。

-   **📝 直感的な支払い記録**
    -   「誰が」「何に」「いくら」支払ったかを簡単に入力し、一覧で確認できます。
    -   入力ミスがあっても、個別の支払いをいつでも削除できます。

-   **📊 最適な精算方法を自動算出**
    -   アプリが全ての立て替え情報を基に計算を行い、「誰が、誰に、いくら支払うべきか」という最もシンプルな送金の組み合わせを提示します。

-   **💾 サーバー不要 & データ保持**
    -   入力されたデータはすべてブラウザの **LocalStorage** に保存されます。サーバーへの登録は不要で、ページを再読み込みしたり閉じたりしてもデータが消えることはありません。

-   **⚡ 高速な動作**
    -   ビルドツールに **Vite** を採用し、軽快で高速な開発体験とアプリケーションのパフォーマンスを実現しています。

## 💡 こだわりのポイント： 設計思想

### あえて「サーバーレス」に

このアプリは、あえてバックエンドやデータベースを持たない構成にしています。
すべてのデータ処理と保存を **LocalStorage** を使ってブラウザ内（クライアントサイド）で完結させることで、以下のメリットを実現しました。

-   **プライバシー**: 誰が、いつ、どこで、何に使ったかという情報は、ユーザーのデバイスの外に出ることはありません。
-   **手軽さ**: アカウント登録やログインは一切不要。サイトにアクセスしたその瞬間から利用を開始できます。
-   **コストと運用**: サーバーの維持コストがかからず、GitHub Pagesなどで手軽にデプロイが可能です。

このような割り勘計算ツールに求められるのは「その場で手軽に使えること」であると考え、このシンプルでセキュアな設計を選択しました。

## 🛠️ 使用技術 (Tech Stack)

このアプリケーションは、モダンなフロントエンド技術で構築されています。

-   **Framework**: **React**, **TypeScript**
-   **Build Tool**: **Vite**
-   **Styling**: **Tailwind CSS**
-   **State Management**: **Zustand**
-   **Data Storage**: **LocalStorage**
-   **Deployment**: GitHub Pages

## 🚀 ローカルでの実行方法 (Getting Started)

このプロジェクトをご自身の環境で動かす場合は、以下の手順に従ってください。

1.  **リポジトリをクローン**
    ```sh
    git clone https://github.com/your-username/warikan-culculator.git
    ```
2.  **ディレクトリに移動**
    ```sh
    cd warikan-culculator
    ```
3.  **依存関係をインストール**
    ```sh
    npm install
    # または yarn install
    ```
4.  **開発サーバーを起動**
    ```sh
    npm run dev
    # または yarn dev
    ```    ブラウザで `http://localhost:5173` (Viteのデフォルトポート) を開いてください。
