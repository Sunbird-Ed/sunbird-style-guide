import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Forms';
  sections = [
    {
      expandCode: false,
      title: 'Checkbox',
      demoCode: `
      <div class="sb-checkbox sb-checkbox-primary">
      <input type="checkbox" id="check1" name="example">
      <label for="check1">Make my profile visible</label>
      </div>
      `,
      copyCode: `
      <div class="sb-checkbox sb-checkbox-primary">
      <input type="checkbox" name="example">
      <label>Make my profile visible</label>
  </div>
      `
    },
    {
      expandCode: false,
      title: 'Input Disabled',
      demoCode: `
      
      <div class="sb-field-group">
      <label>Field Name</label>
      <div class="sb-field">
          <input class="sb-form-control" disabled type="text" placeholder="Enter Mobile Number">
      </div>
      </div>
  
      `,
      copyCode: `
      
      <div class="sb-field-group">
      <label>Field Name</label>
      <div class="sb-field">
          <input class="sb-form-control" disabled type="text" placeholder="Enter Mobile Number">
      </div>
      </div>
  
      `
    },
    {
      expandCode: false,
      title: 'Input with Error',
      demoCode: `
      
      <div class="sb-field-group">
      <label>Field Name</label>
      <div class="sb-field">
          <input class="sb-form-control is-invalid">
      </div>
      <small class="text-error">Enter phone number</small>
      </div>

      `,
      copyCode: `
      
      <div class="sb-field-group">
      <label>Field Name</label>
      <div class="sb-field">
          <input class="sb-form-control is-invalid">
      </div>
      <small class="text-error">Enter phone number</small>
      </div>
  
      `
    },
    {
      expandCode: false,
      title: 'Field Name',
      demoCode: `
      
      <div class="sb-field-group">
      <label>Field Name</label>
      <div class="sb-field">
          <input class="sb-form-control" type="text" placeholder="Enter Mobile Number">
          <i class="search icon sb-input-icon"></i>
      </div>
      </div>
  
      `,
      copyCode: `
      
      <div class="sb-field-group">
      <label>Field Name</label>
      <div class="sb-field">
          <input class="sb-form-control" type="text" placeholder="Enter Mobile Number">
          <i class="search icon sb-input-icon"></i>
      </div>
      </div>
  `
    },
    {
      expandCode: false,
      title: 'Input with Required',
      demoCode: `
      
      <div class="sb-field-group">
      <label>Required field</label>
      <div class="sb-field">
          <input class="sb-form-control required" required>
      </div>
      </div>
  
      `,
      copyCode: `
      
      <div class="sb-field-group">
      <label>Required field</label>
      <div class="sb-field">
          <input class="sb-form-control required" required>
      </div>
      </div>
  
      `
    },
    {
      expandCode: false,
      title: 'Input with success',
      demoCode: `
      
      <div class="sb-field-group">
      <label>Field Label</label>
      <div class="sb-field">
      <input class="sb-form-control is-valid">
      </div>
      <small class="text-success">Both password are matching</small>
      </div>
  
      `,
      copyCode: `
      
      <div class="sb-field-group">
      <label>Field Label</label>
      <div class="sb-field">
      <input class="sb-form-control is-valid">
      </div>
      <small class="text-success">Both password are matching</small>
      </div>
  
      `
    },
    {
      expandCode: false,
      title: 'Radio',
      demoCode: `
      <div class="sb-radio-btn sb-radio-primary">
        <input type="radio" id="test1" name="radio-group" disabled="disabled" checked>
        <label for="test1">Radio Button label</label>
      </div>
      <div class="sb-radio-btn sb-radio-primary">
        <input type="radio" id="test2" name="radio-group">
        <label for="test2">Peach</label>
      </div>
    
      `,
      copyCode: `
      <div class="sb-radio sb-radio-primary">
        <input type="radio" id="test1" name="radio-group" disabled="disabled" checked>
        <label for="test1">Radio Button label</label>
      </div>
      <div class="sb-radio sb-radio-primary">
        <input type="radio" id="test2" name="radio-group">
        <label for="test2">Peach</label>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Text Area',
      demoCode: `
      <div class="sb-field-group">
      <label>Field Label</label>
          <div class="sb-field">
              <textarea rows="4" class="sb-form-control" placeholder="Enter summary"></textarea>
          </div>
          </div>
      `,
      copyCode: `
      <div class="sb-field-group">
      <label>Field Label</label>
          <div class="sb-field">
              <textarea rows="4" class="sb-form-control" placeholder="Enter summary"></textarea>
          </div>
          </div>
      `
    }

  ];

  ngOnInit() {
  }

}
