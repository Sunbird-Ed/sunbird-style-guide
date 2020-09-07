import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-new',
  templateUrl: './buttons-new.component.html',
  styleUrls: ['./buttons-new.component.scss']
})
export class ButtonsNewComponent implements OnInit {

  pageTitle = "Buttons";
  sections = [
    {
      expandCode: false,
      title: "3D Buttons",
      demoCode: `
      <button type="button" class="sb-btn threeD-btn sb-btn-primary sb-btn-normal mr-8 ripple">Primary Button/Info</button>
      <button type="button" class="sb-btn threeD-btn sb-btn-secondary sb-btn-normal mr-8 ripple">Secondary/Success</button>
      <button type="button" class="sb-btn threeD-btn sb-btn-tertiary sb-btn-normal mr-8 ripple">Tertiary/Warning</button>
      <button type="button" class="sb-btn threeD-btn sb-btn-error sb-btn-normal mr-8 ripple">Error</button>
      <button type="button" class="sb-btn threeD-btn sb-btn-gray sb-btn-normal mr-8 ripple">Gray</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn threeD-btn sb-btn-primary sb-btn-normal ripple">Primary Button/Info</button>
      <button type="button" class="sb-btn threeD-btn sb-btn-secondary sb-btn-normal ripple">Secondary/Success</button>
      <button type="button" class="sb-btn threeD-btn sb-btn-tertiary sb-btn-normal ripple">Tertiary/Warning</button>
      <button type="button" class="sb-btn threeD-btn sb-btn-error sb-btn-normal ripple">Error</button>
      <button type="button" class="sb-btn threeD-btn sb-btn-gray sb-btn-normal ripple">Gray</button>
      `
    },
    {
      expandCode: false,
      title: "Float Buttons",
      demoCode: `
      <button type="button" class="sb-btn float-btn sb-btn-primary sb-btn-normal mr-8 ripple">Primary Button/Info</button>
      <button type="button" class="sb-btn float-btn sb-btn-secondary sb-btn-normal mr-8 ripple">Secondary/Success</button>
      <button type="button" class="sb-btn float-btn sb-btn-tertiary sb-btn-normal mr-8 ripple">Tertiary/Warning</button>
      <button type="button" class="sb-btn float-btn sb-btn-error sb-btn-normal mr-8 ripple">Error</button>
      <button type="button" class="sb-btn float-btn sb-btn-gray sb-btn-normal mr-8 ripple">Gray</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn float-btn sb-btn-primary sb-btn-normal ripple">Primary Button/Info</button>
      <button type="button" class="sb-btn float-btn sb-btn-secondary sb-btn-normal ripple">Secondary/Success</button>
      <button type="button" class="sb-btn float-btn sb-btn-tertiary sb-btn-normal ripple">Tertiary/Warning</button>
      <button type="button" class="sb-btn float-btn sb-btn-error sb-btn-normal ripple">Error</button>
      <button type="button" class="sb-btn float-btn sb-btn-gray sb-btn-normal ripple">Gray</button>
      `
    },
    {
      expandCode: false,
      title: "Animate Buttons",
      demoCode: `
      <button type="button" class="btn sb-btn-primary btn-animate sb-btn-normal mr-8">Primary Button/Info</button>
      <button type="button" class="btn sb-btn-secondary btn-animate sb-btn-normal mr-8">Secondary/Success</button>
      <button type="button" class="btn sb-btn-tertiary btn-animate sb-btn-normal mr-8">Tertiary/Warning</button>
      <button type="button" class="btn sb-btn-error btn-animate sb-btn-normal mr-8">Error</button>
      <button type="button" class="btn sb-btn-gray btn-animate sb-btn-normal mr-8">Gray</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn animate-btn sb-btn-primary sb-btn-normal">Primary Button/Info</button>
      <button type="button" class="sb-btn animate-btn sb-btn-secondary sb-btn-normal">Secondary/Success</button>
      <button type="button" class="sb-btn animate-btn sb-btn-tertiary sb-btn-normal">Tertiary/Warning</button>
      <button type="button" class="sb-btn animate-btn sb-btn-error sb-btn-normal">Error</button>
      <button type="button" class="sb-btn animate-btn sb-btn-gray sb-btn-normal">Gray</button>
      `
    }
  ];

  ngOnInit() {
  }
}
