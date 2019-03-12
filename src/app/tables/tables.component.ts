import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {

  constructor() { }

  pageTitle = 'Tables';
  sections = [
    {
      expandCode: false,
      title: 'Table - with Download',
      demoCode: `
      <div class="sb-dtable-container">
  <div class="sb-dtable-search-header search-header-withbg">

    <div class="sb-search-box small no-btn">
      <div class="input-div relative">
        <i class="search icon"></i> 
        <input class="sb-search-input" type="text" placeholder="Search..." />
        <i class="close icon"></i>
        <div class="sb-loader"></div>
      </div>
      <button class="sb-btn sb-btn-normal">Search</button>
    </div>


    <div class="download-file"><i class="download icon"></i>Download File</div>
  </div>
  <table class="ui selectable fixed single-line table no-br-radius sb-dtable">
    <thead class="sb-dtable-header">
      <tr>
        <th class="sb-sort-icon">Name</th>
        <th class="sb-sort-icon">Age</th>
        <th class="sb-sort-icon">Job</th>
      </tr>
    </thead>
    <tbody class="sb-dtable-body">
      <tr>
        <td data-label="Name">James</td>
        <td data-label="Age">24</td>
        <td data-label="Job">Engineer</td>
      </tr>
      <tr class="sb-activated-row">
        <td data-label="Name">Jill</td>
        <td data-label="Age">26</td>
        <td data-label="Job">Engineer</td>
      </tr>
      <tr>
        <td data-label="Name">Elyse</td>
        <td data-label="Age">24</td>
        <td data-label="Job">Designer</td>
      </tr>
      <tr>
        <td data-label="Name">Elyse</td>
        <td data-label="Age">24</td>
        <td data-label="Job">Designer</td>
      </tr>
      <tr>
        <td data-label="Name">Elyse</td>
        <td data-label="Age">24</td>
        <td data-label="Job">Designer</td>
      </tr>
      <tr>
        <td data-label="Name">Elyse</td>
        <td data-label="Age">24</td>
        <td data-label="Job">Designer</td>
      </tr>
      <tr>
        <td data-label="Name">Elyse</td>
        <td data-label="Age">24</td>
        <td data-label="Job">Designer</td>
      </tr>
      <tr>
        <td data-label="Name">Elyse</td>
        <td data-label="Age">24</td>
        <td data-label="Job">Designer</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      copyCode: `
      <div class="sb-dtable-container">
      <div class="sb-dtable-search-header search-header-withbg">
    
        <div class="sb-search-box small no-btn">
          <div class="input-div relative">
            <i class="search icon"></i>
            <input class="sb-search-input" type="text" placeholder="Search..." />
            <i class="close icon"></i>
            <div class="sb-loader"></div>
          </div>
          <button class="sb-btn sb-btn-normal">Search</button>
        </div>
    
    
        <div class="download-file"><i class="download icon"></i>Download File</div>
      </div>
      <table class="ui selectable fixed single-line table no-br-radius sb-dtable">
        <thead class="sb-dtable-header">
          <tr>
            <th class="sb-sort-icon">Name</th>
            <th class="sb-sort-icon">Age</th>
            <th class="sb-sort-icon">Job</th>
          </tr>
        </thead>
        <tbody class="sb-dtable-body">
          <tr>
            <td data-label="Name">James</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Engineer</td>
          </tr>
          <tr class="sb-activated-row">
            <td data-label="Name">Jill</td>
            <td data-label="Age">26</td>
            <td data-label="Job">Engineer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    {
      expandCode: false,
      title: 'Table - Default',
      demoCode: `
      <div class="sb-dtable-container">
    <table class="sb-dtable ui selectable striped fixed single-line table">
        <thead class="sb-dtable-header pd-y-x">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
            </tr>
        </thead>
        <tbody class="sb-dtable-body body-large">
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Engineer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">26</td>
                <td data-label="Job">Engineer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
        </tbody>
    </table>
</div>
      `,
      copyCode: `
      <div class="sb-dtable-container">
    <table class="sb-dtable ui selectable striped fixed single-line table">
        <thead class="sb-dtable-header pd-y-x">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
            </tr>
        </thead>
        <tbody class="sb-dtable-body body-large">
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Engineer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">26</td>
                <td data-label="Job">Engineer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            <tr>
                <td data-label="Name">
                    <div class="sb-media">
                        <img src="" alt="" class="sb-media-object">
                        <div class="sb-media-body">
                            <h6 class="media-heading">United Course</h6>
                            <p class="media-description">Course</p>
                        </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
        </tbody>
    </table>
</div>
      `
    }
  ];

  ngOnInit() {
  }

}
