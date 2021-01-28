/**
 * @file 常用工具类/工具方法
 * @author Christopher-Teng <tf15902876866@gmail.com>
 */

/**
 * 单例模式通用实现，独立的创建逻辑
 * @constructor
 * @param {function} FuncClass 需要生成单例的业务类构造函数
 * @returns {object} 根据传入的构造函数创建的唯一实例
 */
function Singleton(FuncClass) {
  let _instance = null;
  return new Proxy(FuncClass, {
    construct(target, args) {
      return _instance || (_instance = Reflect.construct(target, args));
    },
  });
}

/**
 * 简单工厂模式，可以根据需求扩展/删除产品类
 * @constructor
 * @return {object} 返回一个工厂类实例
 */
class Factory {
  constructor() {
    this.product = {};
  }
  addProduct(prodName, prodClass) {
    if (!this.product[prodName]) {
      this.product[prodName] = prodClass;
    }
  }
  getProduct(prodName, ...args) {
    if (!this.product[prodName]) {
      throw new Error(`There's no product named ${prodName}!`);
    }
    return new this.product[prodName](...args);
  }
  removeProduct(prodName) {
    if (this.product[prodName]) {
      delete this.product[prodName];
    }
  }
}

/**
 * 抽象工厂模式，规定接口，制定工厂类的结构
 * @example
 * class Factory extends AbstractFactory{
 *  constructor(){
 *    super()
 *  }
 *  addProduct(prodName,prodClass){
 *   ...
 *  }
 *  getProduct(prodName,...args){
 *    ...
 *  }
 *  removeProduct(prodName){
 *    ...
 *  }
 * }
 */
class AbstractFactory {
  constructor() {
    if (new.target === AbstractFactory) {
      throw new Error("The abstract class cannot be instantiated!");
    }
  }
  addProduct() {
    throw new Error("The abstract method cannot be called!");
  }
  getProduct() {
    throw new Error("The abstract method cannot be called!");
  }
  removeProduct() {
    throw new Error("The abstract method cannot be called!");
  }
}

/**
 * 建造者模式，结合链模式
 * @constructor
 * @param {string|number|object} params 实例对象的参数
 * @returns {object} 具有按步骤添加组件和获取最终产品方法的实例对象
 * @example
 * class Tyre{
 *  constructor(size,type){
 *    this.size=size
 *    this.type=type
 *  }
 * }
 * class Engine{
 *  constructor(hp,type){
 *    this.horsepower=hp
 *    this.type=type
 *  }
 * }
 * const myCar=new Builder({
 *  brand:'Benz',
 *  color:'white',
 *  classification:'sports car'
 * }).build('tyre',Tyre,'215/50','公路轮胎')
 * .build('engine',Engine,'550hp','v8发动机').getProduct()
 * console.log(myCar) >Object { params:Object { brand:'Benz',color:'white',classification:'sports car'},tyre:Object { size:'215/50',type:'公路轮胎},engine:Object { horsepower:'550hp',type:'v8发动机'}}
 */
class Builder {
  constructor(params) {
    const _product = {
      params,
    };
    return {
      build(builderName, builderClass, ...args) {
        const _part = new builderClass(...args);
        Object.assign(_product, {
          [builderName]: _part,
        });
        return this;
      },
      getProduct() {
        return _product;
      },
    };
  }
}

/**
 * 适配器模式，将jQuery中的ajax请求改成axios中的请求方式，传参不变，方便老项目迁移
 * @param {object} jQuery jQuery的全局变量，一般是$
 * @param {object} axios axios的全局变量
 */
function ajax2AxiosAdapter(jQuery, axios) {
  jQuery.ajax = function (ajaxOptions) {
    return axios({
      url: ajaxOptions.url,
      method: ajaxOptions.type,
      responseType: ajaxOptions.dataType,
      data: ajaxOptions.data,
    })
      .then((data) => {
        ajaxOptions.success(data.data);
      })
      .catch(ajaxOptions.error);
  };
}

/**
 * 装饰者模式，给传入对像的特定方法添加新的功能
 * @param {object} originObj 需要对现有方法进行装饰的对象
 * @param {string} originKey 需要进行装饰的方法
 * @param {function} fn 需要装饰器添加的新方法
 * @example
 * window.onload=function(){console.log('原来的onload事件')}
 * function debugInfo(){console.log('完成原来的onload事件')}
 * originDecorateFn(window,'onload',debugInfo)
 * 页面完成加载后 >原来的onload事件
 *               >完成原来的onload事件
 */
function originDecorateFn(originObj, originKey, fn) {
  originObj[originKey] = (function () {
    const originFn = originObj[originKey];
    return function () {
      originFn || originFn();
      fn();
    };
  })();
}

/**
 * 发布订阅模式通用实现
 * @constructor
 * @returns {object} 具有订阅、取消订阅和发布功能的实例
 */
class Publisher {
  constructor() {
    const _subsMap = [];
    return {
      subscribe(type, cb) {
        if (_subsMap[type]) {
          if (!_subsMap[type].includes(cb)) {
            _subsMap[type].push(cb);
          }
        } else {
          _subsMap[type] = [cb];
        }
      },
      unSubscribe(type, cb) {
        if (!_subsMap[type] || !_subsMap[type].includes(cb)) {
          return;
        }
        const index = _subsMap[type].indexOf(cb);
        _subsMap[type].splice(index, 1);
      },
      notify(type, ...args) {
        if (!_subsMap[type]) {
          return;
        }
        _subsMap[type].forEach((cb) => cb(...args));
      },
    };
  }
}

/**
 * 策略模式，封装多个算法，根据需求使用不同的算法
 * @constructor
 * @returns {object} 可以添加、删除、应用算法的实例
 */
class Strategy {
  constructor() {
    const _algorithm = {};
    return {
      addAlgorithm(algorithmName, algorithmFn) {
        if (!_algorithm[algorithmName]) {
          _algorithm[algorithmName] = algorithmFn;
        }
      },
      removeAlgorithm(algorithmName) {
        if (_algorithm[algorithmName]) {
          delete _algorithm[algorithmName];
        }
      },
      applyAlgorithm(algorithmName, ...args) {
        if (_algorithm[algorithmName]) {
          return _algorithm[algorithmName](...args);
        }
      },
    };
  }
}

/**
 * 模板方法模式：抽象模板类，定义了添加、修改和移除模板方法的功能，定义了使用模板的抽象方法，需要子类来具体实现
 * @constructor
 * @example
 * class Beverage extends AbstractTemplate{
 *  constructor(){
 *    super()
 *  }
 *  applyTemplateMethods(name="热拿铁",params={
 *    boil:["92度热水"],
 *    grind:["极细研磨"],
 *    appliance:["意式全自动咖啡机"],
 *    additive:["热牛奶"]
 *  }){
 *    return Object.assign({
 *      "饮品名":name
 *    },this.methods.boil(...params.boil),
 *    this.methods.grind(...params.grind),
 *    this.methods.appliance(...params.appliance),
 *    this.methods.additive(...params.additive)
 *    )
 *  }
 * }
 * const beverageShop=new Beverage()
 * beverageShop.addTemplateMethod('boil',temperature=>{
 *  return {
 *    "水温":temperature
 *  }
 * }).addTemplateMethod('grind',grind=>{
 *  return {
 *    "研磨度":grind
 *  }
 * }).addTemplateMethod('appliance',appliance=>{
 *  return {
 *    "冲煮器具":appliance
 *  }
 * }).addTemplateMethod('additive',additive=>{
 *  return {
 *    "添加物":additive
 *  }
 * })
 * const hotLatte=beverageShop.applyTemplateMethods()
 * console.log(hotLatte)  > Object {冲煮器具:"意式全自动咖啡机",水温:"92度热水",添加物:"热牛奶",研磨度:"极细研磨",饮品名:"热拿铁"}
 */
class AbstractTemplate {
  constructor() {
    if (new.target === AbstractTemplate) {
      throw new Error("The abstract class cannot be instantiated!");
    }
    this.methods = {};
  }
  addTemplateMethod(methodName, method) {
    if (!this.methods[methodName]) {
      this.methods[methodName] = method;
    }
    return this;
  }
  removeTemplateMethod(methodName) {
    if (this.methods[methodName]) {
      delete this.methods[methodName];
    }
    return this;
  }
  modifyTemplateMethod(methodName, method) {
    if (this.methods[methodName]) {
      this.methods[methodName] = method;
    }
    return this;
  }
  applyTemplateMethods() {
    throw new Error("The abstract method cannot be called!");
  }
}

/**
 * 抽象中介者类，规定注册成员，删除成员和各成员间相互通信的接口，具体逻辑由子类实现
 * @constructor
 * @example
 *
 * class MatchMaker extends AbstractMediator {
 *  constructor() {
 *   super();
 *   this.roster = {};
 *  }
 *  registeredMembers(...memberList) {
 *    memberList.forEach((member) => {
 *      if (!this.roster[member.familyName]) {
 *        this.roster[member.familyName] = [member];
 *      } else {
 *        this.roster[member.familyName].push(member);
 *      }
 *    });
 *  }
 *  removeMember(member) {
 *    const family = this.roster[member.familyName];
 *    if (family) {
 *      const idx = family.indexOf(member);
 *      if (idx > -1) {
 *        family.splice(idx, 1);
 *        if (family.length === 0) {
 *          delete this.roster[member.familyName];
 *        }
 *      }
 *    }
 *  }
 *  transmitMessage(result, oneself, other) {
 *    result? console.log(`${oneself.name} 觉得合适~\t${other.name} 符合要求！`) : console.log(`${oneself.name} 觉得不合适~\t${other.name} 不符合要求！`);
 *  }
 *  checkConditions(oneself, other) {
 *    const result = Object.keys(oneself.target).every((key) => {
 *      const [low, high] = oneself.target[key];
 *      return low <= other.info[key] && other.info[key] <= high;
 *    });
 *    this.transmitMessage(result, oneself, other);
 *  }
 *  match() {
 *    Object.keys(this.roster).forEach((familyOneself, familyIndex, families) => {
 *      families
 *        .filter((familyName) => familyName !== familyOneself)
 *        .forEach((familyOther) => {
 *          this.roster[familyOther].forEach((other) => {
 *            this.roster[familyOneself].forEach((oneself) => {
 *              oneself.gender !== other.gender &&
 *                other.info &&
 *                this.checkConditions(oneself, other);
 *            });
 *          });
 *        });
 *    });
 *  }
 * }
 *
 * const matchMaker = new MatchMaker();
 * const Tom = {
 *   name: "张小帅",
 *   gender: "男方",
 *   familyName: "张小帅家",
 *   info: { age: 25, height: 171, salary: 5000 },
 *   target: {
 *     age: [23, 27]
 *   }
 * },
 * TomParents = {
 *   name: "张小帅家长",
 *   gender: "男方",
 *   familyName: "张小帅家",
 *   info: null,
 *   target: {
 *     height: [160, 167]
 *   }
 * },
 * Lily = {
 *   name: "李小美",
 *   gender: "女方",
 *   familyName: "李小美家",
 *   info: { age: 23, height: 160 },
 *   target: {
 *     age: [25, 27]
 *   }
 * },
 * LilyParents = {
 *   name: "李小美家长",
 *   gender: "女方",
 *   familyName: "李小美家",
 *   info: null,
 *   target: {
 *     salary: [10000, 20000]
 *   }
 * },
 * Chris = {
 *   name: "孙小拽",
 *   gender: "男方",
 *   familyName: "孙小拽家",
 *   info: {
 *     age: 27,
 *     height: 173,
 *     salary: 20000
 *   },
 *   target: {
 *     age: [23, 27]
 *   }
 * },
 * ChrisParents = {
 *   name: "孙小拽家长",
 *   gender: "男方",
 *   familyName: "孙小拽家",
 *   info: null,
 *   target: {
 *     height: [160, 170]
 *   }
 * };
 *
 * matchMaker.registeredMembers(
 * Tom,
 * TomParents,
 * Lily,
 * LilyParents,
 * Chris,
 * ChrisParents
 * );
 * matchMaker.match(); > "张小帅 觉得合适~  李小美 符合要求！" "张小帅家长 觉得合适~    李小美 符合要求！" "李小美 觉得合适~  张小帅 符合要求！" "李小美家长 觉得不合适~   张小帅 不符合要求！" "李小美 觉得合适~  孙小拽 符合要求！" "李小美家长 觉得合适~    孙小拽 符合要求！" "孙小拽 觉得合适~  李小美 符合要求！" "孙小拽家长 觉得合适~    李小美 符合要求！"
 */
class AbstractMediator {
  constructor() {
    if (new.target === AbstractMediator) {
      throw new Error("The abstract class cannot be instantiated!");
    }
  }
  registeredMembers() {
    throw new Error("The abstract method cannot be called!");
  }
  removeMember() {
    throw new Error("The abstract method cannot be called!");
  }
  transmitMessage() {
    throw new Error("The abstract method cannot be called!");
  }
}

/**
 * 链模式，通过链式调用生成DOM树，调用后返回DOM元素的代理对象，将setAttribute、appendChild、innerHTML方法改为可以链式调用，增加get方法返回生成的DOM树
 * @param {string} tag 要生成的HTML标签
 * @method setAttribute 一次性设置多个属性或设置一个属性，返回代理对象
 * @method appendChild 一次性添加多个子节点，可以直接添加文本节点，返回代理对象
 * @method innerHTML 设置标签内容，返回代理对象
 * @method get 返回生成的DOM树
 * @returns {object} DOM元素的代理对象
 * @example
 * const dataList=createDOM('ul')
 * .setAttribute({id:'data_list',class:'data-list'})
 * .appendChild(
 *  createDOM('li')
 *  .setAttribute('class','data-item')
 *  .appendChild('li-item 1')
 *  .get(),
 *  createDOM('li')
 *  .setAttribute('class','data-item')
 *  .innerHTML('li-item <strong>2</strong>')
 *  .appendChild(
 *    createDOM('a')
 *    .setAttribute('href','https://www.baidu.com')
 *    .appendChild('跳转百度')
 *    .get()
 *  )
 *  .get()
 * )
 * .get()
 *
 * console.log(dataList)  > <ul id='data_list' class='data-list'><li class='data-item'>li-item 1</li><li class='data-item'>li-item <strong>2</strong><a href='https://www.baidu.com'>跳转百度</a></li></ul>
 *
 */
function createDOM(tag) {
  return new Proxy(document.createElement(tag), {
    get(target, property) {
      if (property === "setAttribute") {
        return function (attr, value) {
          if (typeof attr === "object") {
            for (const [key, val] of Object.entries(attr)) {
              target.setAttribute(key, val);
            }
          } else {
            target.setAttribute(attr, value);
          }
          return this;
        };
      }
      if (property === "appendChild") {
        return function (...children) {
          for (const child of children) {
            if (typeof child === "string") {
              target.appendChild(document.createTextNode(child));
            } else {
              target.appendChild(child);
            }
          }
          return this;
        };
      }
      if (property === "innerHTML") {
        return function (html) {
          target.innerHTML = html;
          return this;
        };
      }
      if (property === "get") {
        return function () {
          return target;
        };
      }
    },
  });
}

/**
 * 备忘/缓存：将原函数转变为可以缓存结果的新函数，适用于开销大的函数，避免多次重复执行是消耗性能
 * @param {function} fn 原始函数，一般具有较大的运行开销
 * @returns {function} 对传入函数增加运行结果缓存功能的新函数
 */
function memories(fn) {
  const _cache = {};
  return function (...rest) {
    const key = JSON.stringify(rest);
    return _cache[key] || (_cache[key] = fn.apply(fn, rest));
  };
}

/**
 * 柯里化：将原函数的部分参数固定，返回一个接受剩余参数的新函数，适用于缩小适用范围，创建一个针对性更强的函数
 * @param {function} fn 原始函数，需要多个参数
 * @param {array} rest1 原始函数需要固定的参数
 * @returns {function} 将原始函数部分参数固定，只需传入剩余部分参数的新函数
 */
function currying(fn, ...rest1) {
  return function (...rest2) {
    return fn.apply(fn, rest1.concat(rest2));
  };
}

/**
 * 反柯里化：扩大原函数适用范围，创建一个应用范围更广的函数
 * @param {function} fn 原始函数
 * @returns {function} 一个扩大了原始函数适用范围的新函数
 * @example
 * const pushPro=UnCurrying(Array.prototype.push)  // 将数组的push方法反柯里化
 * const notArr={0:1,1:2,2:3,length:3}
 * pushPro(notArr,4,5,6) // 使用pushPro方法为类数组对象添加新元素
 * console.log(notArr)  >{0:1,1:2,2:3,3:4,4:5,5:6,length:6}
 */
function unCurrying(fn) {
  return function (target, ...rest) {
    return fn.apply(target, rest);
  };
}

/**
 * 消抖函数：消除抖动，防止短时间内重复触发事件，提高性能
 * @param {function} fn 原始函数
 * @param {number} delay 抖动阈值，在此时间以内的重复函数调用将被忽略
 * @returns 防止短时间内重复调用原始函数的新函数
 */
function debounce(fn, delay = 200) {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * 移动适配布局：采用vw+rem方式兼容新旧浏览器
 * @param {object} doc DOM document对象
 * @param {object} win BOM window对象
 */
function setRootFontSize(doc, win) {
  const dummy = doc.createElement("_").style;
  dummy.width = "1vw";
  if (dummy.width) {
    doc.documentElement.style.fontSize = "1vw";
    return;
  }
  const docEl = doc.documentElement,
    resizeEvt = "orientationchange" in win ? "orientationchange" : "resize",
    reCalc = function () {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) {
        return;
      }
      docEl.style.fontSize = clientWidth / 100 + "px";
    };
  reCalc();
  win.addEventListener(resizeEvt, reCalc, false);
}

export default {
  Singleton, // 单例模式
  Factory, // 简单工厂模式
  AbstractFactory, // 抽象工厂模式
  ajax2AxiosAdapter, // 适配器模式，$.ajax转换成axios
  originDecorateFn, // 装饰者模式，为传入对象的指定方法添加新功能
  Builder, // 建造者模式
  Publisher, // 发布订阅模式
  Strategy, // 策略模式
  AbstractTemplate, // 模板方法模式
  AbstractMediator, // 中介者模式
  createDOM, // 链模式，生成DOM树
  memories, // 备忘模式
  currying, // 柯里化
  unCurrying, // 反柯里化
  debounce, // 消抖函数
  setRootFontSize, // 移动适配布局(vw+rem)
};
