import { BASE_API_URL } from '@/common/Constants'

import axios from 'axios'

import { authHeader } from './base.service'

const API_URL = `${BASE_API_URL}devices`

class DeviceService {
  saveDevice = async (device) => {
    const response = await axios.post(API_URL, device, { headers: authHeader() })
    return response
  }

  deleteDevice = async (device) => {
    const response = await axios.delete(`${API_URL}/${device.id}`, { headers: authHeader() })
    return response
  }

  getAllDevices = async () => {
    const response = await axios.get(API_URL)
    return response
  }
}

export default new DeviceService()
