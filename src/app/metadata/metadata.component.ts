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
      title: 'Player - Metadata',
      demoCode: `
      <div class="sb-meta-data-container sb-meta-data-row-facing">
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
      </div>
      `,
      copyCode: `
      <div class="sb-meta-data-container">
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
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Player - Metadata 2',
      demoCode: `
      <div class="sb-meta-data-container sb-meta-data-column d-flex flex-w-wrap">
      <dl class="sb-meta-data">
        <dt>Title</dt>
        <dd>SNF Chapter 1 Kalrav Hindi</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Ownership</dt>
        <dd></dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Organization</dt>
        <dd>NTP</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Author</dt>
        <dd>Balaji A</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Medium</dt>
        <dd></dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Board/Syllabus</dt>
        <dd>State (Andhra Pradesh)</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Class</dt>
        <dd>Class 1</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Subject</dt>
        <dd>Hindi</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Created on</dt>
        <dd>31st March 2018</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Last update</dt>
        <dd>31st March 2018</dd>
      </dl>
      </div>
      `,
      copyCode: `
      <div class="sb-meta-data-container sb-meta-data-column d-flex flex-w-wrap">
      <dl class="sb-meta-data">
        <dt>Title</dt>
        <dd>SNF Chapter 1 Kalrav Hindi</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Ownership</dt>
        <dd></dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Organization</dt>
        <dd>NTP</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Author</dt>
        <dd>Balaji A</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Medium</dt>
        <dd></dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Board/Syllabus</dt>
        <dd>State (Andhra Pradesh)</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Class</dt>
        <dd>Class 1</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Subject</dt>
        <dd>Hindi</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Created on</dt>
        <dd>31st March 2018</dd>
      </dl>
      <dl class="sb-meta-data">
        <dt>Last update</dt>
        <dd>31st March 2018</dd>
      </dl>
      </div>
      `
    }
   
  ];

  ngOnInit() {
  }

}
