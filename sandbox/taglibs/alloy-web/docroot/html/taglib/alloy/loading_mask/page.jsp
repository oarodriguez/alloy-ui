<%@ include file="init.jsp" %>

<alloy-util:component
	excludeAttributes="var,javaScriptAttributes,useMarkup,useJavaScript"
	tagPageContext="<%= pageContext %>"
	options="<%= options %>"
	var="LoadingMask1"
	module="aui-loading-mask"
	name="LoadingMask"
/>