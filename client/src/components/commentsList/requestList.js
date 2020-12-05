const IP = "192.168.0.106"

async function requestList(values){
  return await fetch(`http://${IP}:9937/list/feedback`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: { "Content-Type": "application/json" }
  })
}

export default requestList