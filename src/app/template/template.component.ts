import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  component;
  template;
  title;
  sections;

  constructor( private activeRoute: ActivatedRoute, private http: HttpClient ) {

    this.activeRoute.params.subscribe(routeParams => {

      if (routeParams.component) {
        this.component = routeParams.component;
      } else {
        this.component = 'buttons';
      }

      this.getContent(this.component).subscribe(data => {
        this.template = data[this.component];
      });
    });

  }

  public getContent(component): Observable<any> {
    return this.http.get('./assets/data.json');
  }

  ngOnInit() { }
}
