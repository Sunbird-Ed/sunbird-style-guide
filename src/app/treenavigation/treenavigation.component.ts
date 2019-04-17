import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash-es';
import * as $ from 'jquery';
import * as  treePicker from '../../assets/libs/semantic-ui-tree-picker/semantic-ui-tree-picker';
declare var $: any;
declare var jQuery: any;
$.fn.treePicker = treePicker;
interface TopicTreeNode {
  id: string;
  name: string;
  selectable: string;
  nodes: Array<TopicTreeNode>;
}
@Component({
  selector: 'app-treenavigation',
  templateUrl: './treenavigation.component.html'
})
export class TreenavigationComponent implements OnInit , AfterViewInit{

  public placeHolder: string = 'Select Topic';

  public selectedNodes: any;

  public selectedTopics: any;

  public topicPickerClass: string;

  public data = [
    {
      id: 'tpd_topic_science',
      name: 'Science',
      selectable: 'notselectable',
      nodes: [
        {
          id: 'tpd_topic_physics',
          name: 'Physics',
          selectable: 'selectable',
          nodes: []
        },
        {
          id: 'tpd_topic_chemistry',
          name: 'Chemistry',
          selectable: 'selectable',
          nodes: []
        },
        {
          id: 'tpd_topic_biology',
          name: 'Biology',
          selectable: 'selectable',
          nodes: []
        }
      ]
    },
    {
      id: 'tpd_topic_languages',
      name: 'Languages',
      selectable: 'notselectable',
      nodes: [
        {
          id: 'tpd_topic_english',
          name: 'English',
          selectable: 'selectable',
          nodes: []
        },
        {
          id: 'tpd_topic_telugu',
          name: 'Telugu',
          selectable: 'selectable',
          nodes: []
        },
        {
          id: 'tpd_topic_tamil',
          name: 'Tamil',
          selectable: 'selectable',
          nodes: []
        },
        {
          id: 'tpd_topic_hindi',
          name: 'Hindi',
          selectable: 'selectable',
          nodes: []
        }
      ]
    },
    {
      id: 'tpd_topic_state',
      name: 'States',
      selectable: 'notselectable',
      nodes: [
        {
          id: 'tpd_topic_karnataka',
          name: 'Karnataka',
          selectable: 'selectable',
          nodes: []
        },
        {
          id: 'tpd_topic_maharastra',
          name: 'Maharastra',
          selectable: 'selectable',
          nodes: []
        },
        {
          id: 'tpd_topic_tamilnadu',
          name: 'Tamil Nadu',
          selectable: 'selectable',
          nodes: []
        },
        {
          id: 'tpd_topic_delhi',
          name: 'Delhi',
          selectable: 'selectable',
          nodes: []
        }
      ]
    }
  ];

  constructor() {

  }

  pageTitle = 'Tree Navigation';
  sections = [
    {
      expandCode: false,
      title: 'Topic Picker',
      demoCode: `
      `,
      copyCode: `
      ngAfterViewInit() {
        this.initTopicPicker(this.data);
      }
    
      private initTopicPicker(data: Array<TopicTreeNode>) {
        jQuery('.topic-picker-selector').treePicker({
          data: this.data,
          name: 'Topics',
          noDataMessage: 'No Data',
          submitButtonText: 'Done',
          cancelButtonText: 'Cancel',
          removeAllText: 'Remove all',
          chooseAllText: 'Choose all',
          searchText: 'Search',
          selectedText: 'Selected',
          picked: _.map(this.selectedNodes, 'identifier'),
          onSubmit: (selectedNodes) => {
            this.selectedNodes = selectedNodes;
            this.selectedTopics = _.map(selectedNodes, node => ({
              identifier: node.id,
              name: node.name
            }));
            this.placeHolder = this.selectedTopics.length + ' topics selected';
          },
          nodeName: 'topicSelector',
          minSearchQueryLength: 1
        });
        setTimeout(() =>
          document.getElementById('topicSelector').classList.add(this.topicPickerClass), 100);
      }
      `
    }
  ];

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.initTopicPicker(this.data);
  }

  private initTopicPicker(data: Array<TopicTreeNode>) {
    jQuery('.topic-picker-selector').treePicker({
      data: this.data,
      name: 'Topics',
      noDataMessage: 'No Data',
      submitButtonText: 'Done',
      cancelButtonText: 'Cancel',
      removeAllText: 'Remove all',
      chooseAllText: 'Choose all',
      searchText: 'Search',
      selectedText: 'Selected',
      picked: _.map(this.selectedNodes, 'identifier'),
      onSubmit: (selectedNodes) => {
        this.selectedNodes = selectedNodes;
        this.selectedTopics = _.map(selectedNodes, node => ({
          identifier: node.id,
          name: node.name
        }));
        this.placeHolder = this.selectedTopics.length + ' topics selected';
      },
      nodeName: 'topicSelector',
      minSearchQueryLength: 1
    });
    setTimeout(() =>
      document.getElementById('topicSelector').classList.add(this.topicPickerClass), 100);
  }

}
