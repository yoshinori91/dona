import Component from 'react';

export default class Home extends Component {
  render() {
    return (
        <div>
          <H2>Home</H2>
          <section>ここはHomeだよ。</section>
          {this.props.children}
        </div>
    );
  }
}