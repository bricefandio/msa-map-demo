import axios from 'axios'

export async function getRegions() {
  const { data } = await axios.get('/api/regions')
  return data
}

export async function getGarages(region) {
  const params = {}
  if (region) params.region = region
  const { data } = await axios.get('/api/garages', { params })
  return data
}
