import Axios from 'axios'

const saveBuddy = (buddyData) => {
    return Axios.post("/api/buddies", buddyData)
}

export default saveBuddy