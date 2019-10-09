<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
            xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="xml"/>

   <!-- If we find a tag called /base-->
   <xsl:template match="/base">

   	<!-- Remove the tag and replace it with -->
      <start parameter="param"/>
   </xsl:template>

</xsl:stylesheet>