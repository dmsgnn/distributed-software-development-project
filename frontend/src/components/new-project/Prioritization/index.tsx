import {
	Container,
	Slider,
	SliderFilledTrack,
	SliderMark,
	SliderThumb,
	SliderTrack,
	Stack,
	StackProps,
	Text,
} from '@chakra-ui/react';
import { FC } from 'react';

interface IPrioritizationProps {}

export const Prioritization: FC<StackProps> = (props) => {
	const labelStyles = {
		mt: '2',
		ml: '-2.5',
		fontSize: 'sm',
	};
	return (
		<Container as={Stack} spacing={8} {...props}>
			<Text>
				In this step we ask you to prioritize what security aspects are important for your project. This allows us to
				create a tailored pipeline according to your needs. You can of course adjust the pipeline or change
				prioritization as needed.
			</Text>
			<Text as="b">Data security</Text>
			<Slider colorScheme="blackAlpha" mt="10px" defaultValue={2} max={4}>
				<SliderMark value={0} {...labelStyles}>
					low
				</SliderMark>
				<SliderMark value={2} {...labelStyles}>
					medium
				</SliderMark>
				<SliderMark value={4} {...labelStyles}>
					high
				</SliderMark>
				<SliderTrack boxSize={2.5} borderRadius={10} backgroundColor="#F5F5F5">
					<SliderFilledTrack backgroundColor="black" />
				</SliderTrack>
				<SliderThumb backgroundColor="black" />
			</Slider>
			<Text as="b">Service availability</Text>
			<Slider colorScheme="blackAlpha" defaultValue={2} max={4}>
				<SliderMark value={0} {...labelStyles}>
					low
				</SliderMark>
				<SliderMark value={2} {...labelStyles}>
					medium
				</SliderMark>
				<SliderMark value={4} {...labelStyles}>
					high
				</SliderMark>
				<SliderTrack boxSize={2.5} borderRadius={10} backgroundColor="#F5F5F5">
					<SliderFilledTrack backgroundColor="black" />
				</SliderTrack>
				<SliderThumb backgroundColor="black" />
			</Slider>
		</Container>
	);
};
