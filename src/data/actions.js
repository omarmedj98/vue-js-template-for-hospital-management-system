
function remove_last_character(element) {
    return element.substr(0,element.length - 48)
  }

export const cookieValue = remove_last_character(document.cookie
.split('; ')
.find(row => row.startsWith('access_token'))
.split('=')[1]
.substr(4,document.cookie.length));

export const actionsMixin = {
data() {
return {
  cookieValue
}      
}
}