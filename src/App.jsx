import React from 'react';
import styled from 'styled-components';
import Source from './lamborghini.mp4';
import Video from './Video';
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	& .video-container {
		width: 700px;
	}
`;
const App = () => (
	<StyledElement>
		<div className="video-container">
			<h1 style={{ textAlign: 'center' }}>Video component with plyr</h1>
			<Video source={Source} isEncryption={false} />
		</div>
	</StyledElement>
);
export default App;
