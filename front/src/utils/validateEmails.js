const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default (emails)=>{
    const invaild = emails
    .split(',')
    .map((email=>email.trim()))
    .filter(email=>reg.test(email)===false)
    if (invaild.length) {
        return `these emails are invaild : ${invaild}`;
    }
    return;
} 