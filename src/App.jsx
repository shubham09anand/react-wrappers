import { useState } from "react";
import Modal from './components/common/ui/Modal';
import Alert from "./components/common/ui/Alert";
import Switch from "./components/common/ui/Switch";
import Header from "./components/common/ui/Header";
import Footer from "./components/common/ui/footer";
import Stepper from "./components/common/ui/Stepper";
import DropDown from './components/common/ui/Dropdown';
import SearchBar from "./components/common/ui/SearchBar";
import StarRating from "./components/common/ui/StarRating";
import Datepicker from "./components/common/ui/Datepicker";
import { stepperSteps } from "./components/common/constant/dummyData";
import { TasksList, FilterOption } from './components/common/constant/dummyData';
import { Menu, Search, Plus, Star, Check, Pencil, MoreHorizontal, Trash, Trash2, Moon, Sun, Bath, Wallet } from "lucide-react";
import Sidebar from "./components/common/ui/Sidebar";
import Tooltip from "./components/common/ui/Tooltip";
import Inputwrapper from "./components/common/ui/Inputwrapper";
import { Toaster } from "sonner";
import ProfileImage from './components/common/ui/ProfileImage';

export default function App() {

	const [filter, setFilter] = useState('');
	const [date, setDate] = useState(new Date());
	const [searchText, setSearchText] = useState('');
	const [tasks, setTasks] = useState(TasksList || []);

	const completedCount = tasks.filter((t) => t.completed).length;

	const handleRadioCheck = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task?.id === taskId
					? { ...task, completed: !task?.completed }
					: task
			)
		);
	};

	return (
		<>
			<Toaster richColors position="top-right" />
			<div className="flex">
				{/* <Sidebar/> */}
				<div className="flex-1">
					<Header />
					<div className="min-h-screen bg-[#F3F0FF] flex items-center justify-center p-6 py-20">
						<div className="w-full max-w-lg bg-white rounded-[40px] shadow-xl">
							{/* Header */}
							<div className="px-6 pb-4">
								<ProfileImage
									// src={'https://i.pinimg.com/736x/e0/c8/99/e0c8997b798f7eee41347781a624c283.jpg'}
									name={'Brad Pitt'}
									variantClass={'mt-10'}
								/>

								<div className="flex items-center justify-between mt-8">
									<div>
										<h1 className="text-3xl font-bold text-gray-800">
											My Tasks
										</h1>
										<p className="text-sm text-gray-500 mt-2">
											{completedCount}/{tasks.length} Completed
										</p>
									</div>

									<div className="flex gap-3">
										<Tooltip tooltipClass={'font-bold'} info={'Delete'}>
											<Trash2 size={18} />
										</Tooltip>
										<Tooltip tooltipClass={'font-bold'} info={'Pencil'}>
											<Pencil size={18} />
										</Tooltip>
										<Tooltip tooltipClass={'font-bold'} info={'More Options'}>
											<MoreHorizontal size={18} />
										</Tooltip>
									</div>
								</div>

							</div>

							{/* Task List */}
							<div className="px-4 pb-6 space-y-3">
								{tasks.map((task) => (
									<div
										key={task?.id}
										className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center justify-between"
									>
										<div className="flex items-center gap-4 px-4">
											<Switch value={task?.completed} actFunc={() => handleRadioCheck(task?.id)} />
											<span className={`text-lg ${task?.completed ? "line-through text-gray-400 blur-[.75px]" : "text-gray-700"}`}>
												{task?.title}
											</span>
										</div>

										<Tooltip tooltipClass={'font-bold'} info={'Starred'}>
											<Star
												size={20}
												className={
													task?.completed
														? "fill-(--theme) text-(--theme)"
														: "text-gray-300"
												}
											/>
										</Tooltip>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* <Footer /> */}
				</div>
			</div>
		</>
	);
}