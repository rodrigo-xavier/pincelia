import Replace from './replace.jsx';
import Share from './share.jsx';
import Scripts from './scripts.jsx';
import SocialMedia from './socialmedia.jsx';
import './index.css';


function App() {
    const getContent = () => {
        return (
            <div>
                <Scripts />
                <SocialMedia />
                <Replace />
                <Share />
            </div>
        );
      };

      return (
        <>
          {getContent()}
        </>
    );
}

export default App;