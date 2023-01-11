# 可购买

可购买通常是可以多次购买的升级，且具有不断增长的价格。它们带有可选的按钮，可用于重洗或出售可购买等。

可购买资产的数量是一个`ExpantaNum`. 

处理可购买并实现其效果的有用函数：

- getBuyableAmount(layer, id):获取玩家拥有的可购买数量
- setBuyableAmount(layer, id, amount):设置玩家拥有的可购买数量
- buyableEffect(layer, id):返回可购买的当前效果（如果有）。

可购买的格式如下：

```js
buyables: {
    11: {
        cost(x) { return new ExpantaNum(1).mul(x) },
        display() { return "[占位符]" },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            player[this.layer].points = player[this.layer].points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        etc
    },
    etc
}
```

特性：

- title: **可选**. 以较大字体显示在顶部。它也可以是返回更新文本的函数。

- cost(): 购买下一个可购买产品的成本。可以有一个可选参数“x”来计算第x+1次购买的成本。（x是“ExpantaNum”）。
如果存在多种货币，则可以返回对象。
                    
- effect(): **可选**. 一个函数，计算并返回该可购买对象的当前效果。可以有一个可选的参数“x”来计算购买对象的x的效果。
可以返回一个值或包含多个值的对象。

- display(): 一个函数，返回标题后应显示在可购买商品上的所有内容，可能包括描述、数量、成本和当前效果。可以使用简单的HTML。

- unlocked(): **可选**. 返回布尔值以确定可购买对象是否可见的函数。默认值为已解锁。

- canAfford(): 一个返回布尔值的函数，用于确定是否可以购买一个可购买。

- buy(): 一个函数，实现购买一个可购买，包括花费货币。

- buyMax(): **可选**. 实现尽可能多地购买可购买的函数。

- style: **可选**. 以对象的形式将CSS应用于该可购买对象，其中键是CSS属性，值是这些属性的值（都是字符串）。
        
- purchaseLimit: **可选**. 可购买数量的限制。默认值为无限制。

- marked: **可选** 在可购买的角落添加标记。如果它是“true”，它将是一颗星星，但它也可以是一个图像URL。

- layer: **自动分配的**. 它的值与此层的名称相同，因此可以执行`player[this.layer].points`或类似操作。

- id: **自动分配的**. 这是一个“键”，可购买物品存放在下面，方便存取。示例中的可购买id为11。

出售一个/全部出售：

包含`sellOne`或`sellAll`函数将导致可购买项下方出现一个额外的按钮。它们在功能上是相同的，但“卖出一个”出现在“卖出全部”之上。您也可以将它们用于其他用途。

- sellOne/sellAll(): **可选**. 按下按钮时调用。标准用途是减少/重置可购买的数量，并可能将一些货币返还给玩家。

- canSellOne/canSellAll(): **可选**. 布尔值确定是否显示按钮。如果“canSellOne/All”不存在，但“sellOne/All”存在，则始终显示相应的按钮。


要添加respec按钮或类似按钮，请将respecBuyables函数添加到主buyables对象（而不是单个可购买）。
您可以同时使用以下功能：

- respec(): **可选**. 当按下按钮时（在可选的确认消息之后）调用此功能。

- respecText: **可选**. 要显示在respec按钮上的文本。

- showRespec(): **可选**. 如果定义了respecBuyables，则确定是否显示按钮的函数。如果不存在，则默认为true。

- respecMessage: **可选**. respec上的自定义确认消息，代替默认消息。