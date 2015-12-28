# Browserifyのバグ確認！
どうしよう・・・  
main、a、bの3つのモジュールがあります。  
mainからaをrequireしており、  
aとbは**互いに**requireしています。  
そのとき、bからaは`Object { }`(=> 空っぽ）になってしまうのです・・・
