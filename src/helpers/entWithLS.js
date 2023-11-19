export const saveToLocalStorage = (userData) => {

    
    
    const storedData = localStorage.getItem('userDataArray')
    console.log(storedData)
    
    if (!storedData) {
        localStorage.setItem('userDataArray', JSON.stringify([]))        
    }

    const userArray = JSON.parse(storedData)
    userArray.push(userData)
    localStorage.setItem('userDataArray', JSON.stringify(userArray));
}