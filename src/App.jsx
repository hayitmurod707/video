import React from 'react';
import styled from 'styled-components';
import Source from './lamborghini.mp4';
import Video from './Video';
const StyledElement = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	& .video-container {
		width: 700px;
	}
`;
const App = () => (
	<StyledElement>
		<div className="video-container">
			<Video source={Source} />
		</div>
	</StyledElement>
);
export default App;
