# Browserifyのバグ確認！
どうしよう・・・  
main、a、bの3つのモジュールがあります。  
mainからaをrequireしており、  
aとbは**それぞれ相手を**requireしています。  
そのとき、bからaは`Object { }`(=> 空っぽ）になってしまうのです・・・

## 誰か教えてください！
BrowserifyのIssueに上げてください！（英語に自信がない）