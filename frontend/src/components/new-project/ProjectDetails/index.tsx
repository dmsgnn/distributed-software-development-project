import {
	Box,
	Container,
	HStack,
	Radio,
	RadioGroup,
	Stack,
	StackProps,
	Text,
	useRadio,
	useRadioGroup,
	UseRadioProps,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface IProjectDetailsProps {}

function RadioCard(props: UseRadioProps & { children: ReactNode }) {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				cursor="pointer"
				borderRadius="15px"
				backgroundColor="#F5F5F5"
				_checked={{
					bg: '#4C4C4C',
					color: 'white',
					borderColor: '#4C4C4C',
				}}
				px={6}
				py={1}
			>
				{props.children}
			</Box>
		</Box>
	);
}

function Selection(props) {
	const options = Object.values(props);
	const { getRootProps, getRadioProps } = useRadioGroup();

	const group = getRootProps();

	return (
		<HStack {...group} backgroundColor="#F5F5F5" borderRadius={10} p={2} justifyContent="space-around">
			{options.map((value: any) => {
				const radio = getRadioProps({ value });
				return (
					<RadioCard key={value} {...radio}>
						{value}
					</RadioCard>
				);
			})}
		</HStack>
	);
}

export const ProjectDetails: FC<StackProps> = (props) => {
	const types = ['Website', 'Executable', 'Mobile', 'Other'];
	const priorities = ['Finance', 'Social', 'Sport', 'E-commerce'];

	return (
		<Container as={Stack} spacing={5} {...props}>
			<Text>Select the type of project you want to analyze.</Text>
			<Selection {...types}></Selection>
			<Text>Select the domain of your project.</Text>
			<Selection {...priorities}></Selection>
			<RadioGroup>
				<Text as="b">Do you store any user data?</Text>
				<Stack>
					<Radio value="1">Yes, we store personal data such as emails.</Radio>
					<Radio value="2">Yes, but meta data only.</Radio>
					<Radio value="3">No</Radio>
				</Stack>
			</RadioGroup>
		</Container>
	);
};
