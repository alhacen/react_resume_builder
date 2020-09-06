import React, {useState} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  Card,
  Icon,
  Tag,
  DatePicker,
  Modal,
  Input,
  Slider,
  Tooltip,
  PageHeader,
  Button,
  Descriptions,
  Row,
  Col,
} from 'antd';

import moment from 'moment';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

const skillLevel = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
};

class Resume extends React.Component {
  constructor(props) {
    super(props);
    const tmp = {old: this.props.data};
    console.log(this.props .data,'Ggg')
    console.log(tmp,"ggg");
    let i = 0;
    let tmp1;
    console.log(this.props.data);
    const arr = [
      'basics',
      0,
      'work',
      1,
      'skills',
      1,
      'achievements',
      0,
      'links',
      1,
      'education',
      1,
      'languages',
      0,
      'hobby',
      0,
    ];
    for (i = 0; i < arr.length; i += 2) {
      if (tmp.old[arr[i]] === undefined) {
        tmp1 = arr[i];
        // console.log(tmp1)
        tmp.old[arr[i]] = arr[i + 1] ? [{}] : {};
      }
    }
    console.log(tmp);
    this.state = tmp;
  }

  onInputChange(e, i, f, index = 0) {
    // console.log(e)
    let tmp;
    if (/<[a-z/][\s\S]*>/i.test(e.innerHTML) && e.innerHTML !== undefined) {
      e.innerHTML = e.innerText;
    }
    if (this.state.new === undefined) {
      this.setState({new: {...this.state.old}});
    } else {
      switch (i) {
        case 'basics':
          this.setState({
            new: {...this.state.new, basics: {...this.state.new.basics, [f]: e.innerText}},
          });
          console.log(this.state);
          break;
        case 'work':
          // console.log(f)
          tmp = e.innerHTML === undefined ? e : e.innerHTML;
          if (parseInt(this.state.new.work.length,10) - 1 == index) {
            const asdf = this.state;
            asdf.new.work.push({
              company: '',
              designation: '',
              companyLocation: '',
              startDate: null,
              endDate: null,
              summary: '',
            });
            // console.log(this.state.new)
            this.setState({...asdf});
          } else {
            const asdf = this.state;
            asdf.new.work[index][f] = tmp;
            console.log(this.state.new);
            // this.setState({...asdf})
          }
          console.log(this.state);
          break;
        case 'skills':
          tmp = e.innerHTML === undefined ? e : e.innerHTML;
          if (parseInt(this.state.new.skills.length) - 1 == index) {
            const asdf = this.state;
            asdf.new.skills.push({name: '', level: ''});
            console.log(this.state.new);
            this.setState({...asdf});
          } else {
            const asdf = this.state;
            asdf.new.skills[index][f] = tmp;
            console.log(this.state.new);
            // this.setState({...asdf})
          }
          console.log(this.state);
          break;
        case 'achievements':
          this.setState({
            new: {
              ...this.state.new,
              achievements: {...this.state.new.achievements, [f]: e.innerText},
            },
          });
          console.log(this.state);
          break;
        case 'education':
          if (parseInt(this.state.new.education.length) - 1 == index) {
            const asdf = this.state;
            asdf.new.education.push({institution: '', studyType: '', year: null, grade: ''});
            console.log(this.state.new);
            this.setState({...asdf});
          } else {
            const asdf = this.state;
            asdf.new.education[index][f] = e.innerText;
            console.log(this.state.new);
            // this.setState({...asdf})
          }
          break;
        case 'links':
          if (parseInt(this.state.new.links.length) - 1 == index) {
            const asdf = this.state;
            asdf.new.links.push({type: '', url: ''});
            console.log(this.state.new);
            this.setState({...asdf});
          } else {
            const asdf = this.state;
            asdf.new.links[index][f] = e.innerText;
            console.log(this.state.new);
            // this.setState({...asdf})
          }
          break;
        case 'languages':
          this.setState({new: {...this.state.new, languages: {[f]: e.innerText}}});
          console.log(this.state);
          break;
        case 'hobby':
          this.setState({new: {...this.state.new, hobby: {[f]: e.innerText}}});
          console.log(this.state);
          break;
        default:
          break;
      }
    }
  }

  componentDidMount(prevProps) {
    const resumeInputs = document.getElementsByClassName('resumeInput');
    let i;
    let pAttribute;
    let pCursor;
    for (i = 0; i < resumeInputs.length; i++) {
      if (resumeInputs[i].tagName == 'P') {
        resumeInputs[i].setAttribute('contenteditable', this.props.editable);
      } else if (resumeInputs[i].tagName == 'B') {
      }
    }
  }

  onSave(data) {
    const tmp = data;
    let i;
    let k;
    let j;
    let flag = 0;
    for (i in tmp) {
      if (Array.isArray(tmp[i])) {
        for (j = 0; j < tmp[i].length; j++) {
          flag = 0;
          for (k in tmp[i][j]) {
            if (tmp[i][j][k] !== '' && tmp[i][j][k] !== null) {
              flag = 1;
            }
          }
          if (flag == 0) {
            tmp[i].splice(j, 1);
            j--;
          }
        }
        tmp[i][j] = {};
      }
    }
    console.log(JSON.stringify(data));
    const save = this.props.onSave;
    if (save) save(data);
  }

  render() {
    return (
      <div className='home-screen'>
        <div style={{position: 'fixed', left: '95%'}} />
        <Row>
          <div className='basic-details'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <p
                contentEditable='true'
                onKeyUp={e => {
                  this.onInputChange(e.target, 'basics', 'name');
                }}
                className='contenteditableInput resumeInput size20 bottom-border bold'
                placeholder='Name'
                id='Name'>
                {this.state.old.basics.name}
              </p>
            </Col>
            <Col xs={24} sm={8} md={8}>
              <p
                contentEditable='true'
                onKeyUp={e => {
                  this.onInputChange(e.target, 'basics', 'email');
                }}
                className='contenteditableInput resumeInput size15 margin-top5'
                placeholder='Email'
                id='email'>
                {this.state.old.basics.email}
              </p>
            </Col>
            <Col xs={24} sm={8} md={8}>
              <p
                contentEditable='true'
                onKeyUp={e => {
                  this.onInputChange(e.target, 'basics', 'phone');
                }}
                className='contenteditableInput resumeInput size15 l-r-border margin-top5'
                placeholder='Mobile'
                id=''>
                {this.state.old.basics.phone}
              </p>
            </Col>
            <Col xs={24} sm={8} md={8}>
              <p
                contentEditable='true'
                onKeyUp={e => {
                  this.onInputChange(e.target, 'basics', 'location');
                }}
                className='contenteditableInput resumeInput size15 margin-top5'
                placeholder='Present Location'
                id=''>
                {this.state.old.basics.location}
              </p>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <i>
                <p
                  contentEditable='true'
                  onKeyUp={e => {
                    this.onInputChange(e.target, 'basics', 'summary');
                  }}
                  className='contenteditableInput resumeInput size15'
                  placeholder='Describe yourself in one sentence'
                  id=''>
                  {this.state.old.basics.summary}
                </p>
              </i>
            </Col>
          </div>
          <div className='pro-details'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop: '25px'}}>
              <h3>
                <b>Work & Professional Experience</b>
              </h3>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              {Object.entries(this.state.old.work).map(([key, value]) => (
                <div>
                  <Col xs={24} sm={4} md={4}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'work', 'startDate', key);
                      }}
                      className='contenteditableInput resumeInput border size15'
                      placeholder='start date'>
                      {value.startDate}
                    </p>
                  </Col>
                  <Col xs={24} sm={4} md={4}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'work', 'endDate', key);
                      }}
                      className='contenteditableInput resumeInput border size15'
                      placeholder='end date'>
                      {value.endDate}
                    </p>
                  </Col>
                  <Col xs={12} sm={8} md={8}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'work', 'company', key);
                      }}
                      className='contenteditableInput resumeInput border size15 bg-grey'
                      placeholder='Company/Organization Name'>
                      {value.company}
                    </p>
                  </Col>
                  <Col xs={12} sm={8} md={8}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'work', 'location', key);
                      }}
                      className='contenteditableInput resumeInput border size15 bg-grey'
                      placeholder='Company Location'>
                      {value.companyLocation}
                    </p>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'work', 'designation', key);
                      }}
                      className='contenteditableInput resumeInput border size15 bg-grey'
                      placeholder='Designation'>
                      {value.designation}
                    </p>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'work', 'summary', key);
                      }}
                      className='contenteditableInput resumeInput border size15'
                      style={{height: '150px', textAlign: 'left'}}>
                      {value.summary}
                    </p>
                  </Col>
                  <p>&nbsp;</p>
                </div>
              ))}
            </Col>
          </div>
          <div className='skills'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop: '25px'}}>
              <h3>
                <b>Skills</b>
              </h3>
            </Col>
            {Object.entries(this.state.old.skills).map(([key, value]) => (
              <div>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'skills', 'name', key);
                      }}
                      className='contenteditableInput resumeInput border size15'
                      style={{margin: '5px'}}
                      placeholder='Ex. javascript'>
                      {value.name}
                    </p>
                  </Col>
                  <Col xs={24} sm={16} md={16} lg={16} xl={16}>
                    <Slider
                      marks={skillLevel}
                      step={1}
                      className=' resumeInput'
                      onChange={e => {
                        this.onInputChange(e, 'skills', 'level', key);
                      }}
                      defaultValue={value.level}
                      max={10}
                    />
                  </Col>
                </Col>
              </div>
            ))}
          </div>
          <div className='achievements'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop: '25px'}}>
              <h3>
                <b>Achievements</b>
              </h3>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <p
                contentEditable='true'
                onKeyUp={e => {
                  this.onInputChange(e.target, 'achievements', 'innerText');
                }}
                className='contenteditableInput  resumeInput border size15'
                style={{height: '150px', textAlign: 'left'}}
                id='achievement-inner-text'>
                {this.state.old.achievements.innerText}
              </p>
            </Col>
          </div>
          <div className='links'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop: '25px'}}>
              <h3>
                <b>Links (Github, Stack Overflow, Patents, Publications)</b>
              </h3>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              {Object.entries(this.state.old.links).map(([key, value]) => (
                <div>
                  <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'links', 'type', key);
                      }}
                      className='contenteditableInput  resumeInput border size15'
                      style={{cursor: 'default'}}
                      placeholder={value.type}
                    />
                  </Col>
                  <Col xs={24} sm={16} md={16} lg={16} xl={16}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'links', 'url', key);
                      }}
                      className='contenteditableInput  resumeInput border size15'
                      placeholder=''>
                      {value.url}
                    </p>
                  </Col>
                </div>
              ))}
            </Col>
          </div>
          <div className='educations'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop: '25px'}}>
              <h3>
                <b>Education & Certifications</b>
              </h3>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              {Object.entries(this.state.old.education).map(([key, value]) => (
                <div>
                  <Col xs={24} sm={5} md={5}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'education', 'year', key);
                      }}
                      className='contenteditableInput resumeInput border size15'
                      placeholder='start date'>
                      {value.year}
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'education', 'institution', key);
                      }}
                      className='contenteditableInput resumeInput border size15'
                      placeholder='School / college / University'>
                      {value.institution}
                    </p>
                  </Col>
                  <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'education', 'studyType', key);
                      }}
                      className='contenteditableInput resumeInput border size15'
                      placeholder='Degree'>
                      {value.studyType}
                    </p>
                  </Col>
                  <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                    <p
                      contentEditable='true'
                      onKeyUp={e => {
                        this.onInputChange(e.target, 'education', 'grade', key);
                      }}
                      className='contenteditableInput resumeInput border size15'
                      placeholder='Grade'>
                      {value.grade}
                    </p>
                  </Col>
                </div>
              ))}
            </Col>
          </div>
          <div className='language-known'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop: '25px'}}>
              <h3>
                <b>Language Fluency</b>
              </h3>
            </Col>
            <Col xs={24} sm={12} md={24} lg={24} xl={24}>
              <p
                contentEditable='true'
                onKeyUp={e => {
                  this.onInputChange(e.target, 'languages', 'language');
                }}
                className='contenteditableInput resumeInput border size15'
                style={{textAlign: 'left'}}
                placeholder='Ex: English..'>
                {this.state.old.languages.language}
              </p>
            </Col>
          </div>
          <div className='intrests'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop: '25px'}}>
              <h3>
                <b>Interests / Hobbies</b>
              </h3>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <p
                contentEditable='true'
                onKeyUp={e => {
                  this.onInputChange(e.target, 'hobby', 'innerText');
                }}
                className='contenteditableInput border resumeInput size15'
                style={{height: '150px', textAlign: 'left'}}
                id='intrest'>
                {this.state.old.hobby.innerText}
              </p>
            </Col>
          </div>
          <div style={{textAlign: 'center'}}>
            <Button
              type='primary'
              onClick={e => {
                this.onSave(this.state.new === undefined ? this.state.old : this.state.new);
              }}>
              Save
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}

export default Resume;
