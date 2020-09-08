import GetUserDataWorker from 'assets/js/get-user-data.worker'

function Worker () {
  const worker = new GetUserDataWorker()
  // const listeners = []
  return worker
  // return {
  //   inUse: false,
  //   async listen () {
  //     const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
  //     console.log({ lucas: result })
  //     self.postMessage(result);
  //   },
  //   unlisten (f) {
  //     // remove(listeners, 'listen', f)
  //     self.removeEventListener('message', f)
  //   },
  //   error (f) {
  //     // listeners.push(['error', f])
  //     self.addEventListener('messageerror', f)
  //   },
  //   unerror (f) {
  //     remove(listeners, 'error', f)
  //     self.removeEventListener('messageerror', f)
  //   },
    // message (data, transfer) {
    //   // const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
    //   // console.log({ result })
    //   // self.postMessage(result);
    //   worker.postMessage(data, transfer)
    // },
  //   destroy () {
  //     listeners.forEach(tuple => {
  //       this['un' + tuple[0]](tuple[1])
  //     })
  //     self.terminate()
  //   }
  // }
}

function remove (list, type, f) {
  list.splice(
    list.indexOf(
      find(list, tuple => tuple[0] === type && tuple[1] === f)
    )
    , 1
  )
}

function find (list, predicate) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) return list[i]
  }
}

export default (context, inject) => {
  console.log('injected')
  const worker = {
    createWorker () {
      return new Worker()
    }
  }
  inject('worker', worker)
  context.$worker = worker
}

