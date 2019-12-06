import React from "react";

const DefaultSorry = () => (
  <div className="self-center justify-center p-2 rounded-lg flex flex-wrap">
    <p className="text-white text-sm p-2">Sorry! :(</p>
    <button className="text-sm rounded-lg bg-gray-900 hover:bg-black shadow-md hover:shadow-lg text-white py-2 px-3 mx-2">
      Let us Know
    </button>
  </div>
);

class Sorry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {
    console.log("Sorry");
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError } = this.state;

    if (hasError) return fallback ? fallback() : <DefaultSorry />;
    if (!hasError) return children;
  }
}

export default Sorry;
