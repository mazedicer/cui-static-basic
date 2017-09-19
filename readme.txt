1. Go to coreui.io > CLICK "DOWNLOAD" button (will send you to github repo)
2. CLICK "Clone or download", CLICK "Download ZIP" 
3. OPEN the downloaded zip file and EXTRACT "Static_Starter_GULP" folder into "/var/www/html/" 
4. Update npm:
        npm install npm@latest -g
    test:
        npm -v
5. in "/var/www/html/Static_Starter_GULP/" install dependencies
    run:
        npm install -g gulp
        npm install -g bower
        bower install
        npm install
        gulp serve
6. http://localhost:3000