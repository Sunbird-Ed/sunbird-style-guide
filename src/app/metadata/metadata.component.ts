import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html'
})
export class MetadataComponent implements OnInit {

  constructor() { }

  pageTitle = 'Metadata UI';
  sections = [
    {
      expandCode: false,
      title: 'Meta Data List',
      demoCode: `
      <h4 class="sb-section-title">Content Information</h4>
      <dl class="sb-meta-data sb-meta-d1">
        <dt>Title</dt>
        <dd>SNF Chapter 1 Kalrav Hindi</dd>
        <dt>Ownership</dt>
        <dd></dd>
        <dt>Organization</dt>
        <dd>NTP</dd>
        <dt>Author</dt>
        <dd>Balaji A</dd>
        <dt>Medium</dt>
        <dd></dd>
        <dt>Board/Syllabus</dt>
        <dd>State (Andhra Pradesh)</dd>
        <dt>Class</dt>
        <dd>Class 1</dd>
        <dt>Subject</dt>
        <dd>Hindi</dd>
        <dt>Created on</dt>
        <dd>31st March 2018</dd>
        <dt>Last update</dt>
        <dd>31st March 2018</dd>
        <dt>concept</dt>
        <dd>comprehension of poems</dd>
        <dt>Keywords</dt>
        <dd>comprehension, poems</dd>
        <dt>Resource Type</dt>
        <dd>read</dd>
      </dl>
      `,
      copyCode: `
      <dl class="sb-meta-data sb-meta-d1">
      <dt>Title</dt>
      <dd>SNF Chapter 1 Kalrav Hindi</dd>
      <dt>aklsdjflsd lfsldjflsakfljslkdfjlksdjflks fljalskdfjl;asdfjlsdjf;l</dt>
      <dd>SNF Chapter 1 Kalrav Hindi</dd>
    </dl>
      `
    }
   
  ];

  ngOnInit() {
  }

}
