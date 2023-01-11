import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
	toDo: string;
}

function CreateToDo() {
	const setToDos = useSetRecoilState(toDoState);
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleValid = ({ toDo }: IForm) => {
		// console.log(data.toDo);
		setToDos((oldToDos) => [
			{ text: toDo, id: Date.now(), category: "TODO" },
			...oldToDos,
		]);
		setValue("toDo", "");
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleValid)}>
				<input
					{...register("toDo", { required: "Please write a To Do" })}
					placeholder="Write a to do"
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default CreateToDo;
