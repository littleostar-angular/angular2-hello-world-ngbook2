
#### online demo

https://littleostar-angular.github.io/angular2-hello-world-ngbook2/

#### deploy
deploy this project to tomcat server, and router is work success. 

https://github.com/littleostar-angular/maven-webapp-load-angular

---
user-list.component.html

    ```html
    <p>
      user-list works!
    </p>
    <ul>
      <!--<li *ngFor="let name of names">hello {{name}}</li>-->
      <app-user-item *ngFor="let name of names" [name]="name"></app-user-item>
    </ul>
    
    ```

---
app.component.html

    ```html
    <div>
      {{ title }}
      <app-hello-world></app-hello-world>
      <app-user-item></app-user-item>
      <app-user-list></app-user-list>
    </div>
    ```

---

end
