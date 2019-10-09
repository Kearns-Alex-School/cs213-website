<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" indent="yes"/>

<!--Start at the /bsa element-->
<xsl:template match="/bsa">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>CS 213 Week 09 Ponder and Prove</title>
	<link rel="StyleSheet" href="BSA.css" type="text/css"/>
</head>
<body>
	<h1>Boy Scouts of America</h1>

	<!--Loop through each council-->
	<xsl:for-each select="council">
		<h2>Council: "<xsl:value-of select="@name"/>"</h2>

		<!--Loop through each troop-->
		<xsl:for-each select="troop">
			<h3>Troop <xsl:value-of select="@number"/> - "<xsl:value-of select="@name"/>"</h3>

			<table class="maintable">
				<tr>
					<th>Scout Name</th>
					<th>Address</th>
					<th>Phone Number</th>
					<th>Merit Badges</th>
					<th>Rank Advancements</th>
				</tr>

				<!--Loop through each scout-->
				<xsl:for-each select="scout">
				<tr>
					<td class="border">
						<xsl:value-of select="lastname"/>, <xsl:value-of select="firstname"/>
					</td>
					<td class="border">
						<xsl:value-of select="address/street"/><br/>
						<xsl:value-of select="address/city"/>, <xsl:value-of select="address/state"/>
					</td>
					<td class="border">
						<xsl:value-of select="phone"/>
					</td>
					<td class="border">
						<table class="subtable">
							<tr class="subhead">
								<th>Name</th>
								<th>Earned</th>
							</tr>
							<!--Loop through each meritbadge-->
							<xsl:for-each select="meritbadge">
							<tr>
								<td><xsl:value-of select="."/></td>
								<td class="wrap"><xsl:value-of select="@date-earned"/></td>
							</tr>
							</xsl:for-each>
							<!--End meritbadge loop-->
						</table>
					</td>
					<td class="border">
						<table class="subtable">
							<tr class="subhead">
								<th>Name</th>
								<th>Earned</th>
							</tr>
							<!--Loop through each rank-->
							<xsl:for-each select="rank">
							<tr>
								<td><xsl:value-of select="."/></td>
								<td class="wrap"><xsl:value-of select="@date-earned"/></td>
							</tr>
							</xsl:for-each>
							<!--End rank loop-->
						</table>
					</td>
				</tr>
				</xsl:for-each>
				<!--End scout loop-->

			</table>
			
		</xsl:for-each>
		<!--End troop loop-->
		
	</xsl:for-each>
	<!--End council loop-->
</body>
</html>
</xsl:template>
</xsl:stylesheet>