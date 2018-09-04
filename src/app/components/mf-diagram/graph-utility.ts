declare var $ : any;
export class GraphUtility {
    getGraphHeader = function () {
        var header = "<?xml version='1.0' encoding='UTF-8' standalone='no'?><graphml xmlns='http://gra" +
                "phml.graphdrawing.org/xmlns' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instanc" +
                "e' xmlns:y='http://www.yworks.com/xml/graphml' xmlns:yed='http://www.yworks.com/" +
                "xml/yed/3' xsi:schemaLocation='http://graphml.graphdrawing.org/xmlns http://www." +
                "yworks.com/xml/schema/graphml/1.1/ygraphml.xsd'><key for='graphml' id='d0' yfile" +
                "s.type='resources'/><key for='port' id='d1' yfiles.type='portgraphics'/><key for" +
                "='port' id='d2' yfiles.type='portgeometry'/><key for='port' id='d3' yfiles.type=" +
                "'portuserdata'/><key attr.name='url' attr.type='string' for='node' id='d4'/><key" +
                " attr.name='description' attr.type='string' for='node' id='d5'/><key for='node' " +
                "id='d6' yfiles.type='nodegraphics'/><key attr.name='Description' attr.type='stri" +
                "ng' for='graph' id='d7'/><key attr.name='url' attr.type='string' for='edge' id='" +
                "d8'/><key attr.name='description' attr.type='string' for='edge' id='d9'/><key fo" +
                "r='edge' id='d10' yfiles.type='edgegraphics'/><graph edgedefault='directed' id='" +
                "G'><data key='d7'/>";
        return header;
    };

    formatText = function (inputString) {
        if (typeof inputString === "undefined" || inputString === null) 
            return "";
        var s = inputString;
        s = s.replace(new RegExp("&", "g"), "&amp;");
        s = s.replace(new RegExp("\\n", "g"), "&#xA;");
        s = s.replace(new RegExp("&apos;", "g"), "'");
        s = s.replace(new RegExp(">", "g"), "&gt;");
        s = s.replace(new RegExp("<", "g"), "&lt;");
        s = s.replace(new RegExp("&quot;", "g"), '""');
        return s;
    };

    createNode = function (node) {
        var shape = "circle";
        if (node.ShapeId === "Decision2") 
            shape = "diamond";
        if (node.ShapeId === "Decision") 
            shape = "diamond";
        if (node.ShapeId === "RoundRect") 
            shape = "roundrectangle";
        var sNodeIdText = this.formatText(node.Name);
        sNodeIdText = shape === "roundrectangle"
            ? this.splitString(sNodeIdText)
            : this.splitShapeString(sNodeIdText, shape);
        var colorOfNode = node.Color;
        var widthCalculation = this.calculateNodeWidth(shape);
        var width = widthCalculation;
        var heightCalculation = shape === "roundrectangle"
            ? this.calculateNodeHeightRoundRect(sNodeIdText)
            : this.calculateNodeHeight(sNodeIdText);
        var height = heightCalculation;
        var gNode = "<node id='" + node.Id + "'><data key='d5'/><data key='d6'><y:ShapeNode><y:Geometry height='" + height + "' width='" + width + "'/><y:Fill color='" + colorOfNode + "' transparent='false'/><y:BorderStyle color='" + colorOfNode + "' type='line' width='1.0'/><y:NodeLabel alignment='center' autoSizePolicy='conte" +
                "nt' fontFamily='Arial' fontSize='13' fontStyle='plain' hasBackgroundColor='false" +
                "' hasLineColor='false' height='" + height + "' modelName='custom' textColor='#000000' visible='true' width='" + width + "'>" + sNodeIdText + "<y:LabelModel><y:SmartNodeLabelModel distance='4.0'/></y:LabelModel><y:ModelPara" +
                "meter><y:SmartNodeLabelModelParameter labelRatioX='0.0' labelRatioY='0.0' nodeRa" +
                "tioX='0.0' nodeRatioY='0.0' offsetX='0.0' offsetY='0.0' upX='0.0' upY='-1.0'/></" +
                "y:ModelParameter></y:NodeLabel><y:Shape type='" + shape + "'/></y:ShapeNode></data></node>";
        return gNode;
    };

    createLink = function (linkId, nodeLink) {
        var linkText = this.formatText(nodeLink.LinkText);
        var link = "<edge id='" + linkId + "' source='" + nodeLink.Origin + "' target='" + nodeLink.Target + "'><data key='d9'/><data key='d10'><y:PolyLineEdge><y:Path sx='0.0' sy='0.0' tx='" +
                "79.51567087688028' ty='-20.66199250788975'/><y:LineStyle color='" + nodeLink.LineColor + "' type='" + nodeLink.LineType + "' width='1.0'/><y:Arrows source='none' target='standard'/><y:EdgeLabel alignment" +
                "='center' configuration='AutoFlippingLabel' distance='2.0' fontFamily='Arial' fo" +
                "ntSize='12' fontStyle='plain' hasBackgroundColor='false' hasLineColor='false' he" +
                "ight='18.701171875' modelName='custom' preferredPlacement='anywhere' ratio='0.5'" +
                " textColor='#000000' visible='true' width='53.3359375'>" + linkText + "<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled='false' defaultAngle='0" +
                ".0' defaultDistance='10.0'/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelMo" +
                "delParameter angle='0.0' distance='30.0' distanceToCenter='true' position='right" +
                "' ratio='0.5' segment='0'/></y:ModelParameter><y:PreferredPlacementDescriptor an" +
                "gle='0.0' angleReference='absolute' angleRotationOnRightSide='co' distance='-1.0" +
                "' frozen='true' placement='anywhere' side='anywhere' sideReference='relative_to_" +
                "edge_flow' /></y:EdgeLabel><y:BendStyle smoothed='false'/></y:PolyLineEdge></dat" +
                "a></edge>";
        return link;
    };

    closeGraph = function () {
        var closeGraph = "</graph><data key='d0'><y:Resources/></data></graphml>";
        return closeGraph;
    };

    getGroupGraphNodes = function (nodeString, groupName) {
        var groupGraph = "<graph edgedefault='directed' id='" + groupName.trim() + "'>" + nodeString + "</graph>\n";
        return groupGraph;
    };

    splitString = function (input) : string {
        input = input.trim();
        if (input.length <= 80) 
            return input;
        var splittedStrings = input.Split(/\r?\n/);
        var newInputString = "";
        for (var i = 0; i < splittedStrings.length; i++) {
            var str = splittedStrings[i];
            var thisString = str.replace(/\r?\n/, "");
            if (thisString.length <= 80) {
                newInputString += thisString + "\n";
                continue;
            }
            var part = thisString.substring(0, 80);
            var charCounts = 0;
            for (var s = 80; s < thisString.length; s++) {
                part += thisString[s];
                if (thisString[s] !== " " && charCounts === 0) 
                    continue;
                if (thisString[s] === " " && charCounts === 0) {
                    part += "\n";
                    charCounts++;
                    continue;
                }
                charCounts++;
                if (thisString[s] !== " ") 
                    continue;
                if (thisString[s] !== " " || charCounts <= 80) 
                    continue;
                part += "\n";
                charCounts = 1;
            }
            newInputString += part + "\n";
        }
        return newInputString;
    };

    splitShapeString = function (input, shape) : string {
        input = input.trim();
        if (input.length <= 25) 
            return input;
        if (shape !== "diamond") 
            return input;
        var allSpaceIndexes = input.split(" ");
        if (allSpaceIndexes.length === 0) 
            return input;
        var newInputString = input.substring(0, 25);
        var charCounts = 0;
        for (var s = 25; s < input.length; s++) {
            newInputString += input[s];
            if (input[s] !== " " && charCounts === 0) 
                continue;
            if (input[s] === " " && charCounts === 0) {
                newInputString += "\n";;
                charCounts++;
                continue;
            }
            charCounts++;
            if (input[s] !== " ") 
                continue;
            if (input[s] !== " " || charCounts <= 25) 
                continue;
            newInputString += "\n";
            charCounts = 1;
        }
        return newInputString;
    };

    calculateNodeWidth = function (shape) {
        return shape === "diamond"
            ? 325
            : 650;
    };

    calculateNodeHeightRoundRect = function (input) {
        var newLineChars = input.split("\n"); //+ input.split("&#xA;");
        var count = (input.match(/&#xA;/g) || [])
            .length;
        newLineChars = $.grep(newLineChars, function (n) {
            return n === 0 || n
        });
        var height = (newLineChars.length + count) * 20 + 10;
        return height;
    };

    calculateNodeHeight = function (input) {
        var newLineChars = input.split(/\r?\n/);
        var count = (input.match(/&#xA;/g) || []).length;
        var height = (newLineChars.length + count) * 20;
        return height;
    };

    generateNewGroup = function (newGrpName) {
        var groupName = "<data key='d6'>\n<y:ProxyAutoBoundsNode>\n<y:Realizers active='0'>\n<y:GroupNode" +
                ">\n<y:Geometry height='60.0' width='450.0' x='183.70396825396824' y='80.0'/>\n<y" +
                ":Fill color='#F5F5F5' transparent='false'/>\n<y:BorderStyle color='#000000' type" +
                "='dashed' width='1.0'/>\n<y:NodeLabel alignment='right' autoSizePolicy='node_wid" +
                "th' backgroundColor='#EBEBEB' borderDistance='0.0' fontFamily='Dialog' fontSize=" +
                "'15' fontStyle='plain' hasLineColor='false' height='22.37646484375' modelName='i" +
                "nternal' modelPosition='t' textColor='#000000' visible='true' width='141.0400793" +
                "6507935' x='0.0' y='0.0'>\n " + newGrpName + "</y:NodeLabel>\n<y:Shape type='roundrectangle'/>\n<y:State closed='false' closed" +
                "Height='60.0' closedWidth='450.0' innerGraphDisplayEnabled='false'/>\n<y:Insets " +
                "bottom='15' bottomF='15.0' left='15' leftF='15.0' right='15' rightF='15.0' top='" +
                "15' topF='15.0'/>\n<y:BorderInsets bottom='0' bottomF='0.0' left='1' leftF='1.00" +
                "0350322420644' right='1' rightF='1.0000031001983984' top='0' topF='0.0'/>\n</y:G" +
                "roupNode>\n<y:GroupNode>\n<y:Geometry height='60.0' width='450.0' x='0.0' y='60." +
                "0'/>\n<y:Fill color='#F5F5F5' transparent='false'/>\n<y:BorderStyle color='#0000" +
                "00' type='dashed' width='1.0'/>\n<y:NodeLabel alignment='right' autoSizePolicy='" +
                "node_width' backgroundColor='#EBEBEB' borderDistance='0.0' fontFamily='Dialog' f" +
                "ontSize='15' fontStyle='plain' hasLineColor='false' height='22.37646484375' mode" +
                "lName='internal' modelPosition='t' textColor='#000000' visible='true' width='59." +
                "02685546875' x='-4.513427734375' y='0.0'>\n" + newGrpName + "</y:NodeLabel>\n<y:Shape type='roundrectangle'/>\n<y:State closed='true' closedH" +
                "eight='60.0' closedWidth='450.0' innerGraphDisplayEnabled='false'/>\n<y:Insets b" +
                "ottom='5' bottomF='5.0' left='5' leftF='5.0' right='5' rightF='5.0' top='5' topF" +
                "='5.0'/>\n<y:BorderInsets bottom='0' bottomF='0.0' left='0' leftF='0.0' right='0" +
                "' rightF='0.0' top='0' topF='0.0'/>\n</y:GroupNode>\n</y:Realizers>\n</y:ProxyAu" +
                "toBoundsNode>\n</data>\n";
        return groupName;
    };

    download = function (fileName, graphString) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:application/graphml;charset=utf-8,' + graphString);
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document
            .body
            .appendChild(element);
        element.click();
        document
            .body
            .removeChild(element);
    };
};
