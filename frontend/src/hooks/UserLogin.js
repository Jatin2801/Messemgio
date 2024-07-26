import toast from "react-hot-toast"

const UserLogin = () => {
   
    const login = async (username,password) => {
    const success =  handleInputErrors({username,password})
    if(!success) return
    try {
        const res = await fetch("/api/auth/login",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({username,password})
        })
        const data = await res.json();
        localStorage.setItem("chat-user", JSON.stringify(data));

        if(!res.ok){
            toast.error('Wrong Username/Password')
        }
        if(res.ok){
              toast.success('Successfully Logged in')
              window.setTimeout(function(){ window.location = "/"; },1000); 
        }
    } catch (error) {
        console.log(error);
    return toast.error(error.message)
    }
 }

 return {login}
}

export default UserLogin

function handleInputErrors({ fullname, username, password, confirmpass, gender }) {
    if (!username || !password ) { //We installed react-hot-toast for noti.
        toast.error('Field/s Empty')
        return false
    }
    return true
}