import React, { Component } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";

class Problem extends Component {
  state = {}

  constructor(props) {
    super(props);
    this.state = {
      code: "",
      language: "python",
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.code === nextState.code;
  }

  onChange = (code) => {
    this.setState({ code });
  }

  render() { 
    return (
      <div id="problem">
        <div className="left-panel">
          <h1 className="problem-title">TWO SUM</h1>
          <hr/>
          <p>Given an array of integers, return indices of the two numbers such that they add up to a specific target.</p>
          <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
          <h2>Example</h2>
          <div className="example">
            <p>Given <code>nums = [2, 7, 11, 15], target = 9</code>,</p>

            <p>Because <code>nums[0] + nums[1] = 2 + 7 = 9</code>,</p>
            <p><code>return [0, 1].</code></p>
          </div>
        </div>
        <div className="right-panel">
          <select onChange={(e) => this.setState({ language: e.target.value })}>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
          </select>
          <div className="editor-container">
            <AceEditor
              mode={this.state.language}
              theme="xcode"
              width="100%"
              height="500px"
              showPrintMargin={false}
              editorProps={{ $blockScrolling: true }}
              onChange={this.onChange}
            />
          </div>
          <button onClick={() => console.log(this.state.code)}>SUBMIT</button>
        </div>
      </div>
    );
  }
}
 
export default Problem;