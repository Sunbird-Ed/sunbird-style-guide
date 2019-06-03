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
      title: 'Checkbox block level element',
      demoCode: `
      <div class="sb-checkbox sb-checkbox-primary">
      <input type="checkbox" id="check1" name="example">
      <label for="check1">Primary checkbox</label>
      </div>
      <div class="sb-checkbox sb-checkbox-secondary">
      <input type="checkbox" id="check2" name="example">
      <label for="check2">Secondary checkbox</label>
      </div>
      <div class="sb-checkbox sb-checkbox-warning">
      <input type="checkbox" id="check3" name="example">
      <label for="check3">Warning checkbox</label>
      </div>
      <div class="sb-checkbox sb-checkbox-error">
      <input type="checkbox" id="check4" name="example">
      <label for="check4">Error checkbox</label>
      </div>
      `,
      copyCode: `
      <div class="sb-checkbox sb-checkbox-primary">
      <input type="checkbox" id="check1" name="example">
      <label for="check1">Primary checkbox</label>
      </div>
      <div class="sb-checkbox sb-checkbox-secondary">
      <input type="checkbox" id="check2" name="example">
      <label for="check2">Secondary checkbox</label>
      </div>
      <div class="sb-checkbox sb-checkbox-warning">
      <input type="checkbox" id="check3" name="example">
      <label for="check3">Warning checkbox</label>
      </div>
      <div class="sb-checkbox sb-checkbox-error">
      <input type="checkbox" id="check4" name="example">
      <label for="check4">Error checkbox</label>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Checkbox single line',
      demoCode: `
      <div class="d-flex flex-w-wrap">
        <div class="sb-checkbox sb-checkbox-primary">
        <input type="checkbox" id="check11" name="example">
        <label for="check11">Primary checkbox</label>
        </div>
        <div class="sb-checkbox sb-checkbox-secondary">
        <input type="checkbox" id="check12" name="example">
        <label for="check12">Secondary checkbox</label>
        </div>
        <div class="sb-checkbox sb-checkbox-warning">
        <input type="checkbox" id="check13" name="example">
        <label for="check13">Warning checkbox</label>
        </div>
        <div class="sb-checkbox sb-checkbox-error">
        <input type="checkbox" id="check14" name="example">
        <label for="check14">Error checkbox</label>
        </div>
      </div>
      `,
      copyCode: `
      <div class="d-flex flex-w-wrap">
        <div class="sb-checkbox sb-checkbox-primary">
        <input type="checkbox" id="check1" name="example">
        <label for="check1">Primary checkbox</label>
        </div>
        <div class="sb-checkbox sb-checkbox-secondary">
        <input type="checkbox" id="check2" name="example">
        <label for="check2">Secondary checkbox</label>
        </div>
        <div class="sb-checkbox sb-checkbox-warning">
        <input type="checkbox" id="check3" name="example">
        <label for="check3">Warning checkbox</label>
        </div>
        <div class="sb-checkbox sb-checkbox-error">
        <input type="checkbox" id="check4" name="example">
        <label for="check4">Error checkbox</label>
        </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Radio button block level element',
      demoCode: `
      <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
      <input type="radio" id="radio1" name="example">
      <label for="radio1">Primary checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-secondary">
      <input type="radio" id="radio2" name="example">
      <label for="radio2">Secondary checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-warning">
      <input type="radio" id="radio3" name="example">
      <label for="radio3">Warning checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-error">
      <input type="radio" id="radio4" name="example">
      <label for="radio4">Error checkbox</label>
      </div>
      `,
      copyCode: `
      <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
      <input type="radio" id="radio1" name="example">
      <label for="radio1">Primary checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-secondary">
      <input type="radio" id="radio2" name="example">
      <label for="radio2">Secondary checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-warning">
      <input type="radio" id="radio3" name="example">
      <label for="radio3">Warning checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-error">
      <input type="radio" id="radio4" name="example">
      <label for="radio4">Error checkbox</label>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Checkbox single line',
      demoCode: `
      <div class="d-flex flex-w-wrap">
      <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
      <input type="radio" id="radio11" name="example">
      <label for="radio11">Primary checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-secondary">
      <input type="radio" id="radio12" name="example">
      <label for="radio12">Secondary checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-warning">
      <input type="radio" id="radio13" name="example">
      <label for="radio13">Warning checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-error">
      <input type="radio" id="radio14" name="example">
      <label for="radio14">Error checkbox</label>
      </div>
      </div>
      `,
      copyCode: `
      <div class="d-flex flex-w-wrap">
      <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
      <input type="radio" id="radio11" name="example">
      <label for="radio11">Primary checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-secondary">
      <input type="radio" id="radio12" name="example">
      <label for="radio12">Secondary checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-warning">
      <input type="radio" id="radio13" name="example">
      <label for="radio13">Warning checkbox</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-error">
      <input type="radio" id="radio14" name="example">
      <label for="radio14">Error checkbox</label>
      </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Disabled Checkbox',
      demoCode: `
      <div class="sb-checkbox sb-checkbox-primary">
      <input type="checkbox" id="check" name="disabled" disabled="disabled">
      <label for="check">Make my profile visible</label>
      </div>
      `,
      copyCode: `
      <div class="sb-checkbox sb-checkbox-primary">
      <input type="checkbox" name="example" disabled="disabled">
      <label>Make my profile visible</label>
  </div>
      `
    },
    {
      expandCode: false,
      title: 'Disabled Radio button',
      demoCode: `
      <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
      <input type="radio" id="check" name="disabled" disabled="disabled">
      <label for="check">Make my profile visible</label>
      </div>
      `,
      copyCode: `
      <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
      <input type="checkbox" name="example" disabled="disabled">
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
    },

    {
      expandCode: false,
      title: 'toggle',
      demoCode: `
      <sui-checkbox class="toggle"></sui-checkbox>
      `,
      copyCode: `
    <sui-checkbox class="toggle">Toggle checkbox</sui-checkbox>
      `
    }


  ];

  ngOnInit() {
  }

}
