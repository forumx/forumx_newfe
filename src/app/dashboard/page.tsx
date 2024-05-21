import "./dashboard.scss"

const DashboardPage = () => {
	return (
		<div>
			<iframe
				title="dashboard"
				className={"dashboard"}
				src="https://app.powerbi.com/reportEmbed?reportId=673ef840-0fd3-465f-a9d6-3622b0d61390&autoAuth=true&ctid=5e158e2a-0596-4a6c-8801-3502aef4563f"
				frameBorder={0}
				allowFullScreen={true}></iframe>
		</div>
		
	)
}

export default DashboardPage;