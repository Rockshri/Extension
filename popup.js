document.getElementById('login-btn').addEventListener('click', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
       
        chrome.runtime.sendMessage({action: 'login', username: username, password: password}, function(response) {
          if (response.success) {
            
            window;
          }
        }
        )
}
)
            