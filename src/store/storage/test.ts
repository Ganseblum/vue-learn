
import { defineStore } from 'pinia'
import { Names } from '../index'


type Result = {
    name: string
    sex: string
}
const Login = (): Promise<Result> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: '小满',
                sex: '男'
            })
        }, 3000)
    })
}


export const useTestStore = defineStore(Names.Test, {
    state: () => {
        return {
            user: <Result>{},
            current: 1,
            age: 20
        }
    },
    getters: {
        ageGet(): number{
            return this.age + 10
        },
        currentGet: ():number => {
             return  10
        }
    },
    actions: {
        async getLoginInfo() {
            const result = await Login()
            // action互相调用
            this.setName()
            
            this.user = result;
        },
        setName() {
            console.log(123);
        }

    },
    // 使用该插件，开启数据缓存
  persist: {
  //这里存储默认使用的是session
    enabled: true,
    strategies: [
      {
        //key的名称
        key: 'test',
        //更改默认存储，我更改为localStorage
        storage: localStorage,
        // 可以选择哪些进入local存储，这样就不用全部都进去存储了
        // 默认是全部进去存储
        // paths: ['list']
      }
    ]
  }
})
