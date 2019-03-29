import {
    Component,
    OnInit
} from '@angular/core';
import {
    HighlightResult
} from 'ngx-highlightjs';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {

    constructor() { }

    pageTitle = 'Tables';
    sections = [{
        expandCode: false,
        title: 'Table - Default',
        demoCode: `
            <div class="sb-table-container">
            <table class="sb-table sb-table-fixed sb-table-hover">
            <thead class="sb-table-header heading-large">
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                </tr>
            </thead>
            <tbody class="sb-table-body body-large">
                <tr>
                <td data-label="Name">
                    <div class="sb-media">
                    <img src="" alt="" class="sb-media-object mr-15">
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
                    <img src="" alt="" class="sb-media-object mr-15">
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
                    <img src="" alt="" class="sb-media-object mr-15">
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
                    <img src="" alt="" class="sb-media-object mr-15">
                    <div class="sb-media-body">
                        <h6 class="media-heading">United Course</h6>
                        <p class="media-description">Course</p>
                    </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
                </tr>
                <tr class="sb-table-active">
                <td data-label="Name">
                    <div class="sb-media">
                    <img src="" alt="" class="sb-media-object mr-15">
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
        <div class="sb-pagination-container flex-jc-flex-end">
            <div class="sb-pagination">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `,
        copyCode: `
            <div class="sb-table-container">
            <table class="sb-table sb-table-fixed sb-table-hover">
            <thead class="sb-table-header heading-large">
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                </tr>
            </thead>
            <tbody class="sb-table-body body-large">
                <tr>
                <td data-label="Name">
                    <div class="sb-media">
                    <img src="" alt="" class="sb-media-object mr-15">
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
                    <img src="" alt="" class="sb-media-object mr-15">
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
                    <img src="" alt="" class="sb-media-object mr-15">
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
                    <img src="" alt="" class="sb-media-object mr-15">
                    <div class="sb-media-body">
                        <h6 class="media-heading">United Course</h6>
                        <p class="media-description">Course</p>
                    </div>
                    </div>
                </td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
                </tr>
                <tr class="sb-table-active">
                <td data-label="Name">
                    <div class="sb-media">
                    <img src="" alt="" class="sb-media-object mr-15">
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
        <div class="sb-pagination-container flex-jc-flex-end">
            <div class="sb-pagination">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `
    },
    {
        expandCode: false,
        title: 'Table - with Download',
        demoCode: `
            <div class="sb-table-container">
            <div class="sb-table-search-header search-header-withbg">
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
            <table class="sb-table sb-table-hover sb-table-striped sb-table-sortable br-0">
            <thead class="sb-table-header">
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                </tr>
            </thead>
            <tbody class="sb-table-body">
                <tr>
                <td data-label="Name">James</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Engineer</td>
                </tr>
                <tr>
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
            </tbody>
            </table>
        </div>
        <div class="ui pagination"></div>
      `,
        copyCode: `
            <div class="sb-table-container">
            <div class="sb-table-search-header search-header-withbg">
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
            <table class="sb-table sb-table-hover sb-table-striped sb-table-sortable br-0">
                <thead class="sb-table-header">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Job</th>
                </tr>
                </thead>
                <tbody class="sb-table-body">
                <tr>
                    <td data-label="Name">James</td>
                    <td data-label="Age">24</td>
                    <td data-label="Job">Engineer</td>
                </tr>
                <tr>
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
                </tbody>
            </table>
            </div>

      `
    },
    {
        expandCode: false,
        title: 'Table - with Placeholder',
        demoCode: `
            <div class="sb-table-container">
            <table class="sb-table sb-table-fixed sb-table-placeholder">
            <thead class="sb-table-header heading-large">
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                </tr>
            </thead>
            <tbody class="sb-table-body body-large">
                <tr>
                <td>
                    <div class="sb-media-obj-placeholder">
                    <img src="" alt="" class="image loading">
                    <div>
                        <div class="text loading"></div>
                    </div>
                    </div>
                </td>
                <td><div class="bar loading"></div></td>
                <td><div class="bar loading"></div></td>
                </tr>
            </tbody>
            </table>
            </div>

      `,
        copyCode: `

            <div class="sb-table-container">
            <table class="sb-table sb-table-fixed sb-table-placeholder">
            <thead class="sb-table-header heading-large">
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                </tr>
            </thead>
            <tbody class="sb-table-body body-large">
                <tr>
                <td>
                    <div class="sb-media-obj-placeholder">
                    <img src="" alt="" class="image loading">
                    <div>
                        <div class="text loading"></div>
                    </div>
                    </div>
                </td>
                <td><div class="bar loading"></div></td>
                <td><div class="bar loading"></div></td>
                </tr>
            </tbody>
            </table>
        </div>
      `
    }
    ];

    ngOnInit() { }

}
