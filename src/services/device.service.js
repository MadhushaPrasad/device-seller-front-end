import { BASE_API_URL } from '@/common/Constants'

import axios from 'axios'

import { authHeader } from './base.service'

const API_URL = BASE_API_URL + 'device'

class DeviceService {
  saveDevice(device) {
    const response = axios.post(API_URL, device, { headers: authHeader() })
    return response
  }

  deleteDevice(device) {
    const response = axios.delete(`${API_URL}/${device.id}`, { headers: authHeader() })
    return response
  }

  getAllDevices() {
    const response = axios.get(API_URL, { headers: authHeader() })
    return response
  }
}

export default new DeviceService()
