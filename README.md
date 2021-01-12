# Web 前端学习笔记

---

## 目录

---

### [第一部分、HTML](#%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86%E3%80%81html)

---

### [第二部分、CSS](#%E7%AC%AC%E4%BA%8C%E9%83%A8%E5%88%86%E3%80%81css)

---

### [第三部分、JavaScript](#%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%E3%80%81javascript)

- [JavaScript-设计模式精讲](#javascript-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%B2%BE%E8%AE%B2)
  - [一、创建型模式](#%E4%B8%80%E3%80%81%E5%88%9B%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F)
    - [1-1.单例模式](#1-1.%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F)
    - [1-2.简单工厂模式](#1-2.%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F)
    - [1-3.抽象工厂模式](#1-3.%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F)
    - [1-4.建造者模式](#1-4.%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F)
  - [二、结构型模式](#%E4%BA%8C%E3%80%81%E7%BB%93%E6%9E%84%E5%9E%8B%E6%A8%A1%E5%BC%8F)
    - [2-1.代理模式](#2-1.%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F)
    - [2-2.享元模式](#2-2.%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F)
    - [2-3.适配器模式](#2-3.%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F)
    - [2-4.装饰者模式](#2-4.%E8%A3%85%E9%A5%B0%E8%80%85%E6%A8%A1%E5%BC%8F)
    - [2-5.外观模式](#2-5.%E5%A4%96%E8%A7%82%E6%A8%A1%E5%BC%8F)
    - [2-6.组合模式](#2-6.%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F)
    - [2-7.桥接模式](#2-7.%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F)
  - [三、行为型模式](#%E4%B8%89%E3%80%81%E8%A1%8C%E4%B8%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F)
    - [3-1.发布订阅模式](#3-1.%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F)
    - [3-2.策略模式](#3-2.%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F)
    - [3-3.状态模式](#3-3.%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F)
    - [3-4.模板方法模式](#3-4.%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F)
    - [3-5.迭代器模式](#3-5.%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F)
    - [3-6.命令模式](#3-6.%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F)
    - [3-7.职责链模式](#3-7.%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F)
    - [3-8.中介者模式](#3-8.%E4%B8%AD%E4%BB%8B%E8%80%85%E6%A8%A1%E5%BC%8F)
  - [四、其他模式](#%E5%9B%9B%E3%80%81%E5%85%B6%E4%BB%96%E6%A8%A1%E5%BC%8F)
    - [4-1.MVC-模式](#4-1.mvc-%E6%A8%A1%E5%BC%8F)
    - [4-2.MVP-模式](#4-2.mvp-%E6%A8%A1%E5%BC%8F)
    - [4-3.MVVM-模式](#4-3.mvvm-%E6%A8%A1%E5%BC%8F)
    - [4-4.模块模式解决方案](#4-4.%E6%A8%A1%E5%9D%97%E6%A8%A1%E5%BC%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
    - [4-5.链模式](#4-5.%E9%93%BE%E6%A8%A1%E5%BC%8F)
    - [4-6.中间件](#4-6.%E4%B8%AD%E9%97%B4%E4%BB%B6)

---

## 第一部分、HTML

---

## 第二部分、CSS

---

## 第三部分、JavaScript

---

### JavaScript-设计模式精讲

#### 一、创建型模式

##### 1-1.单例模式

游戏的存档，每次玩游戏都可以拿到同一个存档继续玩，而不是从头再来

##### 1-2.简单工厂模式

下馆子吃饭，只要点好菜就可以吃到想吃的东西，厨师会按照菜名做好菜，消费者不需要知道每道菜是怎么做出来的

##### 1-3.抽象工厂模式

肚子饿了，只要去饭馆就能吃到东西，不管是哪一家馆子，进去之前就知道。点了炒菜可以吃，不管时回锅肉还是红烧排骨，点了汤可以喝，不管是菠菜汤还是番茄汤，食物上桌之前就知道

##### 1-4.建造者模式

生产一台汽车，汽车厂只需要制定各个部件的规格并且完成装配过程，部件的生产由部件生厂商完成

#### 二、结构型模式

##### 2-1.代理模式

找明星拍广告，无法直接接触到明星，只能先和经纪人谈，只有和经纪人谈好合约之后，明星才会到片场开拍

##### 2-2.享元模式

驾考现场的考试车，不是每个考生都有一辆而是多个考生公用一辆，根据当天考生数量增加或减少类型的考试车，优化驾考场地资源消耗

##### 2-3.适配器模式

不同国家提供的电源插孔规格不一样，同一部手机，去不同国家使用，只需要搭配对应的电源适配器，不需要换手机

##### 2-4.装饰者模式

给新房子装修，毛坯房建好就已经可以居住了，装修只是让房子住起来跟舒服更符合个人需求，但是住人的基本功能是不变的

##### 2-5.外观模式

遥控无人机，无人机由非常多的子模块构成，比如飞行控制器、电子调速器、电机、数字电传、陀螺仪和加速度计等等。即使实现一个简单的飞行动作也需要各个子模块相互进行复杂的调用，无人机玩家不可能完全掌握如此复杂的操作，因此制造商使用统一的遥控器简化无人机的操作，玩家只需要使用遥控器上的上下左右前后和左转右转就可以操作无人机，因此遥控器就相当于无人机的外观

##### 2-6.组合模式

文档结构树，文件夹下面可以继续包含子文件夹，也可以包含文件，子文件夹又可以包含文件夹或者文件，以此类推，层层递进构成文档结构树。文件夹因为既能包含子文件夹又能包含文件，因此称为容器节点，或者组合对象；文件相当于树形结构的末端，因此称为叶节点，或者页对象。当我们需要找到某个文件时，只需要在最上层文件夹上发送搜索命令，就可以沿着树形结构层层递进，直到找到文件或遍历完整棵树

##### 2-7.桥接模式

组装变频洗衣机，变频洗衣机都是由电机、滚筒和变频器组成，但是不同型号所使用的部件规格不一样。将电机、滚筒、变频器作为抽象维度，在组装变频洗衣机实例时，抽象维度的三个部件实际的规格可以各自独立改变，从而组装成不同型号的变频洗衣机

> 例如，产品经理要求实现一个按钮样式，默认前景黑色背景浅灰色，当鼠标 mouseover 时，前景蓝色背景绿色尺寸 1.5 倍，当鼠标 mouseleave 时还原，当鼠标按下时前景红色背景紫色尺寸 0.5，鼠标抬起时还原。那么我们可以将设置前景后景颜色和设置尺寸抽象成两个构成按钮样式的抽象维度，对应定义两个桥接函数，然后根据需求在指定事件上对桥接函数传参就可以实现产品需求。利用桥接模式将抽象部分和实现部分分离，使两个维度可以独立变化，降低耦合。

#### 三、行为型模式

##### 3-1.发布订阅模式

去商店买鞋，看中的款式刚好售罄，店员告诉你很快会到货，到时通知你，于是你留下电话号码。当你留下电话后就可以不再管这件事，直到某天该款式到货时，店员拿出小本本，照着上面的电话名单一一通知客户，你接到通知后再决定是否要去商店将鞋买回来

##### 3-2.策略模式

多功能螺丝刀，一把螺丝刀把配多个螺丝刀头，针对不同的使用场合安装对应的螺丝刀头即可

##### 3-3.状态模式

交通灯，红绿黄三种颜色代表交通灯的三种内部状态，不同的状态下交通灯的外部行为逻辑不一样，行为逻辑和内部状态间具有较强的对应关系

> 例如，如果不使用设计模式，要实现如上面交通灯的功能，需要使用 switch-case 或者 if-else 语句，当逻辑复杂时，这种写法非常容易出错，而且很难扩展。使用状态模式，可以将状态和对应的行为抽象出来进行封装，这样代码结构清晰而且方便扩展：

```javascript
class AbstractState {
  constructor() {
    if (new.target === AbstractState) {
      throw new Error("抽象类不能实例化！");
    }
  }
  employ() {
    throw new Error("抽象方法不能调用！");
  }
  changeState() {
    throw new Error("抽象方法不能调用！");
  }
}
class RedState extends AbstractState {
  constructor() {
    super();
    this.colorState = "红色";
  }
  employ() {
    console.log(`交通灯颜色变为${this.colorState}，行人通行&车辆等待！`);
  }
  changeState(trafficLight) {
    trafficLight.setState(trafficLight.yellowState);
  }
}
class GreenState extends AbstractState {
  constructor() {
    super();
    this.colorState = "绿色";
  }
  employ() {
    console.log(`交通灯颜色变为${this.colorState}，行人等待&车辆通行！`);
  }
  changeState(trafficLight) {
    trafficLight.setState(trafficLight.redState);
  }
}
class YellowState extends AbstractState {
  constructor() {
    super();
    this.colorState = "黄色";
  }
  employ() {
    console.log(`交通灯颜色变为${this.colorState}，行人等待&车辆等待！`);
  }
  changeState(trafficLight) {
    trafficLight.setState(trafficLight.greenState);
  }
}
class TrafficLight {
  constructor() {
    this.redState = new RedState();
    this.greenState = new GreenState();
    this.yellowState = new YellowState();
    // 蓝灯状态：this.blueState=new BlueState()
    this.state = this.greenState;
    // 起始状态为蓝灯状态： this.state=this.blueState
  }
  setState(state) {
    state.employ();
    this.state = state;
  }
  changeState() {
    this.state.changeState(this);
  }
}
const light = new TrafficLight();
// 增加蓝灯状态后，light.changeState() 输出：交通灯变为绿色，行人等待&车辆通行！
light.changeState(); // 输出：交通灯颜色变为红色，行人通行&车辆等待！
light.changeState(); // 输出：交通灯颜色变为黄色，行人等待&车辆等待！
light.changeState(); // 输出：交通灯颜色变为绿色，行人等待&车辆通行！
/*
  增加蓝灯状态
  class BlueState extends AbstractState{
    constructor(){
      super()
      this.colorState='蓝色'
    }
    employ(){
      console.log(`交通灯颜色变为${this.colorState}，行人停在马路中间&车辆停在马路中间！`)
    }
    changeState(trafficLight){
      trafficLight.setState(trafficLight.greenState)
    }
  }
*/
```

##### 3-4.模板方法模式

咖啡厅制作咖啡，有一套固定的流程，例如先把水煮沸，然后温杯墨粉，之后冲煮咖啡，最后加入调味料。不同的咖啡只是改变每个步骤的细节，比如水温、冲煮器具、是否加水稀释/加牛奶奶泡/加肉桂粉/加糖等等。

##### 3-5.迭代器模式

点钞机，放入点钞机的钞票具有不同的版次和不同的冠字号，使用者不关心这些细节，只在乎钞票的数量以及是否有假币

> ES6 使用数据结构的 Symbol.iterator 属性来部署迭代器，凡是具有 Symbol.iterator 属性并且返回值符合迭代器对象的，都可以使用 for...of 进行遍历，不论内部是怎样的结构

```javascript
const test = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next: function () {
        return count < 10
          ? {
              value: count++,
            }
          : {
              done: true,
            };
      },
    };
  },
};
for (const val of test) {
  console.log(val); // 输出：0 1 2 3 4 5 6 7 8 9
}
```

##### 3-6.命令模式

宿舍关灯，晚上睡觉前，大家都上床了，有人说了一声“谁去把灯关了”，说话的人并不需要指定说给谁听，也不需要关心最后是谁下床去关灯的，关灯的人也不在乎是谁说的话

> 例如链接中的案例，要移动超级玛丽，可以将上下左右和撤销/重做命令的逻辑独立出来，然后将按钮触发的相应事件和对应命令绑定，在命令的中来绑定移动的人物，这样解耦命令发出者和命令接收者，加入要按钮要移动的是怪物而不是超级玛丽，只需要再创建怪物角色，然后在命令中将绑定对象改为怪物便可以了。如果不使用命令模式，将按钮的回调事件和具体角色直接绑定，一旦需要修改命令发出者或者命令接收者，便需要同时改动多个地方。[超级玛丽](https://codepen.io/SHERlocked93/pen/QeZoKv?editors=1010)

##### 3-7.职责链模式

向领导请假两天，先请示小组领导得到回答只能批准半天内的，然后请示部门领导得到回答只能批准一天内的，最后请示总经理得到批准，一开始提出申请时并不确定哪个领导能批准，申请会沿着职级一级级往上请示

> 职责链模式和区别于命令模式在于命令的传递具有顺序，并且可以通过改变职责链上的节点来控制命令的传递顺序，命令发出者虽然仍然和命令接收者解耦，但是命令的传递过程是具有规律的

```javascript
class AbstractLeader {
  constructor() {
    if (new.target === AbstractLeader) {
      throw new Error("The abstract class cannot be instantiated!");
    }
    this.nextLeader = null;
  }
  setNext(leader) {
    this.nextLeader = leader;
    return leader;
  }
  handle() {
    throw new Error("The abstract method cannot be called!");
  }
}
class GroupLeader extends AbstractLeader {
  constructor(name) {
    super();
    this.name = name;
  }
  handle(duration) {
    duration <= 0.5
      ? console.log(`小组领导${this.name}批准请假！`)
      : this.nextLeader.handle(duration);
  }
}
class DepartmentHead extends AbstractLeader {
  constructor(name) {
    super();
    this.name = name;
  }
  handle(duration) {
    duration <= 1
      ? console.log(`部门领导${this.name}批准请假！`)
      : this.nextLeader.handle(duration);
  }
}
class ManagingDirector extends AbstractLeader {
  constructor(name) {
    super();
    this.name = name;
  }
  handle(duration) {
    duration <= 2
      ? console.log(`总经理${this.name}批准请假！`)
      : console.log(`总经理${this.name}拒绝了请假申请！`);
  }
}
const wangGe = new GroupLeader("wangGe");
const liZhuRen = new DepartmentHead("liZhuRen");
const haHaHa = new ManagingDirector("haHaHa");
wangGe.setNext(liZhuRen).setNext(haHaHa);
wangGe.handle(0.5); // 小组领导wangGe批准请假！
wangGe.handle(1); // 部门领导liZhuRen批准请假！
wangGe.handle(2); // 总经理haHaHa批准请假！
wangGe.handle(3); // 总经理haHaHa拒绝了请假申请！
```

##### 3-8.中介者模式

参加相亲活动，有很多家庭，不可能挨个去找其他家庭了解情况，而是所有参加的家庭把自身条件和择偶标准告诉婚介，由婚介统一进行筛选匹配，然后再通知双方见面沟通

#### 四、其他模式

##### 4-1.MVC-模式

Model 模型层、View 视图层、Controller 控制器层。MVC 模式的目的是通过引入 Controller 来分离 Model 和 View。Model 负责业务数据的处理和存储，在数据更新后更新；View 负责人机交互接口，一般为展示给用户的界面；Controller 负责连接 Model 和 View，接受并处理 View 触发的事件，并且在 Model 的数据状态变动时更新 View。由于 Model 不仅用于数据存储，还负责数据处理，所以在某些场景下，View 可以通过发布-订阅模式监听 Model 上的变化，导致 Model 和 View 相互持有、相互操作、紧密耦合，可维护性仍然有待提升。

> 典型 MVC 模式如下图所示：
>
> ![mvc](images/js_mvc_mvp_mvvm/mvc.jpg)
>
> 用户操作 View 引起数据更新，如下图所示：
>
> ![mvc_trigger_view](images/js_mvc_mvp_mvvm/mvc_trigger_view.jpg)
>
> 用户直接操作 Controller 引起数据更新，如下图所示：
>
> ![mvc_trigger_controller](images/js_mvc_mvp_mvvm/mvc_trigger_controller.jpg)

##### 4-2.MVP-模式

Model 模型层、View 视图层、Presenter 管理层。MVP 模式的目的是将 Model 和 View 完全解耦，对 View 的修改不会影响 Model，对 Model 的修改也不会影响 View，Model 和 View 之间的交互只能通过 Presenter。View 层不布置任何业务逻辑，只负责数据展示和触发事件，其他时间都在等待 Presenter 来更新，所以被称为**被动视图**。由于 Presenter 负责数据获取、数据处理、交互逻辑、UI 效果等功能，因此变得强大起来，如果需要添加或者修改模块功能，只需要修改 Presenter，Model 和 View 则变得责任纯粹而单一，Model 只负责存储数据、View 只负责展示数据。由于 Presenter 需要调用 View 的方法来更新试图，Presenter 直接持有 View 导致对 View 的依赖，并且数据状态改变时，需要手动更新 View，对于大型项目手动更新视图可能是一系列复杂的过程。

> 典型 MVP 模式如下图所示：
>
> ![mvp](images/js_mvc_mvp_mvvm/mvp.jpg)
>
> 用户操作 View 引起数据更新，如下图所示：
>
> ![mvp_trigger](images/js_mvc_mvp_mvvm/mvp_trigger.jpg)

##### 4-3.MVVM-模式

Model 模型层、View 视图层、View-Model 视图模型。与 MVP 模式类似，Model 和 View 完全解耦，View-Model 相当于 Presenter，负责绑定 Model 和 View，相比 Presenter 增加了双向绑定。双向绑定使得 View 层的变动自动反映在 View-Model，反之亦然。对于大型项目，双向绑定可以节约大量手动更新视图的复杂过程，但是双向绑定使得调试和错误定位变得困难，因为 View 层的问题可能源自 View 层也可能源自 Model 层，数据绑定使得一个位置的 Bug 被传递到其他位置，因此对于简单 UI 来说，实现 MVVM 模式的开销是不必要的。

> 典型的 MVVM 模式如下图所示：
>
> ![mvvm](./images/js_mvc_mvp_mvvm/mvvm.jpg)

##### 4-4.模块模式解决方案

- 命名空间模式：创建一个全局对象，将所有变量和方法放入这个全局对象，这个全局对象起到命名空间一样的作用。目的是解决变量冲突，缺点一是如果命名空间结构复杂嵌套过多，调用的时候会变得非常冗长而且在解析的时候性能消耗变大，缺点二是安全性低，所有成员都可以被外部访问。

  ```javascript
  const myNameSpace = {};

  myNameSpace.param1 = "hello";
  myNameSpace.param2 = "world";
  myNameSpace.param3 = { prop: "hello world!" };

  myNameSpace.method = function () {
    console.log("hello world!");
  };
  ```

- 模块模式：利用闭包的特性，使用 IIFE 快速创建一个闭包，将要隐藏的变量和方法放入闭包中，在闭包外面无法访问这些变量和方法而称为私有成员，闭包返回的方法因为作用域的原因可以访问私有成员而称为特权方法。在模块模式创建时，还可以将参数传入闭包中，从而更自由的创建模块，而且可以将全局变量传入模块中，导入全局变量有助于加速模块中即时函数中全局符号的解析速度，因为全局变量成为了该函数的局部变量，缩短了作用域查找长度。

  ```javascript
  const myModule = (function () {
    let privateProp = "";
    function privateMethod() {
      console.log(privateProp);
    }
    return {
      publicProp: "public prop",
      publicMethod: function (prop) {
        privateProp = prop;
        privateMethod();
      },
    };
  })();

  myModule.privateProp; // 输出：undefined
  myModule.privateMethod(); // 输出：Uncaught TypeError:myModule.privateMethod is not a function
  myModule.publicProp; // 输出：public prop
  myModule.publicMethod("new private prop"); // 输出：new private prop
  ```

- 揭示模块模式：又被称作暴露模块模式，将模块模式稍加改动，在闭包中定义所有变量和方法，并返回一个匿名对象，需要供外部使用的变量和方法只需要赋值给所返回的匿名对象即可。使用该模式，所有变量和方法都成为私有成员，而被重命名后暴露出来的私有成员又可以供外部调用，保证安全性的同时又可以灵活的公开私有成员。

  ```javascript
  const myModule = (function () {
    let privateProp = "private prop";
    function privateMethod() {
      console.log(privateProp);
    }
    function setProp(prop) {
      privateProp = prop;
    }
    return {
      set: setProp,
      print: privateMethod,
    };
  })();

  myModule.privateProp; // 输出：undefined
  myModule.privateMethod(); // 输出：Uncaught TypeError:myModule.privateMethod is not a function
  myModule.print(); // 输出：private prop
  myModule.set("new private prop");
  myModule.print(); // 输出：new private prop
  ```

##### 4-5.链模式

在方法调用完成后返回一个对象，有时则直接返回 this，因此可以继续调用这个对象上的其他方法，这样可以在单行代码中连续调用多个方法，好像它们被串起来一样，这就是链式调用，也称为链模式。

> 假如我们需要创建如下所示的 DOM 树结构：

```html
<ul id="data-list">
  <li class="data-item">li-item 1</li>
  <li class="data-item">li-item 2</li>
  <li class="data-item">li-item 3</li>
</ul>
```

> 由于 setAttribute 方法没有返回值，appendChild 方法返回的时添加的节点，因此要完成上述 DOM 结构，需要多次反复调用 setAttribute 方法和 appendChild 方法，步骤零散，十分繁琐，可以使用链模式进行改造，如下所示：

```javascript
function createElement(tag, txt) {
  return tag === "text"
    ? document.createTextNode(txt)
    : document.createElement(tag);
}

HTMLElement.prototype._setAttribute = function (key, value) {
  this.setAttribute(key, value);
  return this;
};

HTMLElement.prototype._appendChild = function (child) {
  this.appendChild(child);
  return this;
};

const myList = createElement("ul")
  ._setAttribute("id", "data-list")
  ._appendChild(
    createElement("li")
      ._setAttribute("class", "data-item")
      ._appendChild(createElement("text", "li-item 1"))
  )
  ._appendChild(
    createElement("li")
      ._setAttribute("class", "data-item")
      ._appendChild(createElement("text", "li-item 2"))
  )
  ._appendChild(
    createElement("li")
      ._setAttribute("class", "data-item")
      ._appendChild(createElement("text", "li-item 3"))
  );

document.body.appendChild(myList);
```

##### 4-6.中间件

中间件就是一个执行特殊逻辑的函数，核心思想是在进入具体业务前进行一系列预处理，或者在结束具体业务逻辑后进行一系列后处理。中间件通常像管道连接一样被串联起来，通过使用中间件来简化和隔离基础设施和业务逻辑之间的细节，从而让开发过程专注于业务逻辑，而不需要对每个请求都进行特殊处理，提升开发效率。

> 典型的中间件应用示意图：
>
> ![middleware](images/js_middleware/middleware.png)
>
> 著名的洋葱模型：
>
> ![onion](images/js_middleware/onion.jpg)

---
