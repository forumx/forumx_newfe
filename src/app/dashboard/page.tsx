import "./dashboard.scss"

const DashboardPage = () => {
	return (
		<div>
			<iframe
				className={"dashboard"}
				title="dashboard"
				// width="1140"
				// height="541.25"
				src="https://app.powerbi.com/reportEmbed?reportId=673ef840-0fd3-465f-a9d6-3622b0d61390&autoAuth=true&embeddedDemo=true"
				allowFullScreen={true}></iframe>
		</div>
		
	)
}

export default DashboardPage;