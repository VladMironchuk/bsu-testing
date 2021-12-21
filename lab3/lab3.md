[Airbnb](https://www.airbnb.ru)
# Functional Test Cases 


## Test Case 1: 
  Steps:  
   - Go to https://www.airbnb.ru  
   - Do not fill "Местоположение" field   
   - Click "Искать" button  
   
 Expected result:  
   - Pop up "Гибкий поиск" must be shown 
 
## Test Case 2:   
  Steps:  
   - Go to https://www.airbnb.ru  
   - Click "Гибкий поиск" button  
  
  Expected result:  
   - Should be redurected to www.airbnb.ru/s/homes   
    
## Test Case 3:   
  Steps:  
   - Go to https://www.airbnb.ru  
   - Enter "Москва" in "Местоположение" field
   - Click "Искать" button  
  
  Expected result:  
   - Should be redirected to https://www.airbnb.ru/s/Москва/homes  
    
## Test Case 4: 
  Steps:  
   - Go to https://www.airbnb.ru/s/Москва/homes     
   - Choose "Цена" section 
   - Set 2000 in "мин. цена" field and 5000 in "макс. цена" field  
   - Click "Сохранить" button  
   
  Expected result:  
   - List of accomodation whose price is from 2000 to 5000
    
## Test Case 5:   
  Steps:  
   - Go to https://www.airbnb.ru/s/Москва/homes   
   - Choose "Цена" section  
   - Set 2000 in "мин. цена" field and 5000 in "макс. цена" field  
   - Click "Очистить" button   
  Exprected result:   
   - "мин. цена" field value must be 740
      
## Test Case 6:   
  Steps:  
   - Go to https://www.airbnb.ru/s/Москва/homes   
   - Click like(heart) button in any item of the list  
  Exprected result: 
   - Pop up window with authorization form must be shown
      
## Test Case 7:   
  Steps:  
   - Go to https://www.airbnb.ru/s/Москва/homes   
   - Click "Тип жилья" section  
   - Choose "Отдельная комната" checkbox  
   - Click "Сохранить" button  
  Exprected result:   
   - Subtitle of any item must be "Отдельная комната, Москва"
      
## Test Case 8:   
  Steps:  
   - Go to https://www.airbnb.ru  
   - Click "Сдайте жильё" button  
  Exprected result: 
   - Should be redirected to https://www.airbnb.ru/host/homes   
     
## Test Case 9:   
  Steps:  
   - Go to https://www.airbnb.ru  
   - Click 'globe' button  
   - In section "Рекомендуемые языки и регионы" choose "English"
  Exprected result:   
   - In search form title of field "Местоположение" must be replaced with "Location"
     
## Test Case 10:   
  Steps:  
   - Go to https://www.airbnb.ru  
   - Click the drop-down list  
   - Choose "Войти"
  Exprected result:   
   - Pop up window with authorization form must be shown
      

###### Mironchuk Vladislav
