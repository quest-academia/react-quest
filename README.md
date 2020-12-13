# 課題の提出方法について

※わからないことがあればReactQuestのチャンネルでメンションつけて質問をお願いします

### ・ターミナルでやる場合

### step 1　git cloneをする
まずターミナルかGit bashで

```console
$ git clone -b develop https://github.com/quest-academia/react-quest.git
```

でcloneを行います
<br>
次に

```console
$ git branch
```

で現在のブランチを確認します.
下記のように表示されればOKです。

```
On branch develop
```

`main` になっている場合は、developに変更ください

```console
$ git fetch
$ git checkout develop
```

### step 2　ブランチを作成
ブランチを作成することを「ブランチを切る」といいます。  
※ブランチを切る（作成する）のは、選んだブランチから派生のブランチを作るということです。  

ブランチ名も統一します。今回の命名規則は以下です。

#### ブランチ命名規則
`feature/(slack名)`  でお願いいたします
※記載例 `feature/kyohei` 

#### ブランチ作成方法

```console
$ git checkout -b feature/(slack名)
```


### step 3　実際の課題を取り組む

課題に取り組む際には

```console
$ ls -l
```

を入力いただくと、でReadme.mdとcopyhtmlのディレクトリがあると思います。

copyhtmlのディレクトリの中に第1回の課題は
<br>
https://it.all-integration.com/　<br>のサイトの模写です。

※条件は提出物はhtml/cssでお願いいたします。JavaScriptとかjQueryは不要です
<br>
作業時間は10時間で以内お願いします。
<br>
（超えてしまったら途中までで大丈夫です）

#### ファイル名について
ファイル名は `slack名_kadai1.html` でお願いします。
 例：kyohei_kadai1.htmlみたいに作成してくださいね
 
 保存場所は
 
 ```console
 $ pwd
 ```

 とターミナルで入力して
 <br>
 
 `react-quest/copyhtml`と結果が出てたらokです

### step 4　課題提出 PullRequest について

本来はブランチで作業した内容を、develop ブランチに取り込んでもらえるように(=merge)依頼することです。  
作業者が develop に取り込むこともできますが、組織で管理しているプロジェクトはレビュワーを立てて、PullRequestのフローを踏むことが多いです。  
レビュワーがレビューしてから作業を取り込むことで、実装を客観的にチェックして実装ミスの防止やクオリティ向上を目指します。

#### Pull Request のルール
以下PRで記載

・4-1 
<br>
 まずは作業ブランチを Githubへpushお願いします
ターミナルでのやり方

```console
$ git branch
```
でbranch名を確認

<br>

```console
$ git add ファイル名
```

<br>

```console
$ git commit -m "コミットメッセージ"
```

※コミットメッセージは日本語でお願いいたします。

<br>

```console
$ git push orirgin feature/(slack名)
```

<br>
でpush完了です！

・4-2
<br>
gitHub > Pull Request にて PR を作成。取り込み先(base) : develop(ブランチを切ったもと) でお願いいたします

1. gitHub > Pull Request にて PR を作成。取り込み先(base) : develop(ブランチを切ったもと) でお願いいたします
2. PR のタイトルは issue タイトルと同じにすること（コピペしましょう）
3. 右側に ReviewersがありますのでそこをShiotaYoshiakiでお願いいたします。


以上になります.これで09-react-quest課題提出チャンネルで課題が提出したことをしおたさんにメンションをつけて
URLを送ると提出完了です！
