export async function callApi(method: string, path: string, data?: any) {
  const res = await fetch(`/api${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (res.status === 401) {
    return res
  }
  return res.json()
}

// import axios from 'axios'

// export async function callApi(
//   method: 'get' | 'post' | 'put' | 'GET' | 'POST' | 'PUT',
//   path: string,
//   data?: any
// ): Promise<any> {
//   const res = await axios({
//     method,
//     url: `/api${path}`,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   })

//   console.log(res)
//   return res
// }

export const checkEmployeeCode = async (code: string) => {
  try {
    const res = await callApi('POST', `/settings/checkCode`, { code })
    console.log(res.match)
    return res.match
  } catch (err) {
    console.log(err)
    return false
  }
}
