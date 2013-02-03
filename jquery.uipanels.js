// UIPanels v0.0.1 - a full featured, light-weight, customizable ui accordian style display
// Copyright (c) 2012 Christopher Hacia chris@chrishacia.com
// Website: http://www.chrishacia.com/scripts/ui-panels
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
var panelSpeed = 800;
function accordionStart()
{
	$('.panels h3').each(function()
	{
		accordionRoll($(this), $(this).next('div'), false, false);
	});
}

function accordionRoll(hedr, cont, clk, ani)
{
	//alert(parseInt($.browser.version, 10));
	//var $elem = $(this).next('div');
	if(hedr == undefined || hedr == null || hedr == '')
	{
		alert('Header H3 not provided for accordion.');
	}
	else if(cont == undefined || cont == null || cont == '')
	{
		alert('Content DIV not provided for accordion.');
	}
	else
	{
		var $hedr = hedr;
		var $elem = cont;
		if(clk == undefined || clk == null || clk == '' || clk == false)
		{
			if($hedr.hasClass('active'))
			{
				if ($.browser.msie){
				  if(parseInt($.browser.version, 10) <= 7)
				  {
					  $elem.find('.formCol_left').show();
					  $elem.find('.formCol_right').show();
				  }
				}
				var elemY = ($elem.children('div').innerHeight()+2);
				$hedr.addClass('active').next('div').addClass('active');
				if(ani == undefined || ani == null || ani == '' || ani == false)
				{
					$elem.css({height:elemY+'px'});
				}
				else
				{
					$elem.animate({height:elemY+'px'}, panelSpeed);
				}
				return true;
			}

			if(!$hedr.hasClass('active'))
			{
				var elemY = '0px';
				$hedr.removeClass('active').next('div').removeClass('active');
				if(ani == undefined || ani == null || ani == '' || ani == false)
				{
					$elem.css({height:elemY});
				}
				else
				{
					$elem.animate({height:elemY}, panelSpeed);
				}

				if ($.browser.msie){
				  if(parseInt($.browser.version, 10) <= 7)
				  {
					  $elem.find('.formCol_left').hide();
					  $elem.find('.formCol_right').hide();
				  }
				}
				return true;
			}
		}
		else
		{
			if(!$hedr.hasClass('active'))
			{
				if ($.browser.msie){
				  if(parseInt($.browser.version, 10) <= 7)
				  {
					  $elem.find('.formCol_left').show();
					  $elem.find('.formCol_right').show();
				  }
				}
				var elemY = ($elem.children('div').innerHeight()+2);
				$hedr.addClass('active').next('div').addClass('active');
				if(ani == undefined || ani == null || ani == '' || ani == false)
				{
					$elem.css({height:elemY+'px'});
				}
				else
				{
					$elem.animate({height:elemY+'px'}, panelSpeed);
				}
				return true;
			}

			if($hedr.hasClass('active'))
			{
				var elemY = '0px';
				$hedr.removeClass('active').next('div').removeClass('active');
				if(ani == undefined || ani == null || ani == '' || ani == false)
				{
					$elem.css({height:elemY});
				}
				else
				{
					$elem.animate({height:elemY}, panelSpeed);
				}

				if ($.browser.msie){
				  if(parseInt($.browser.version, 10) <= 7)
				  {
					  $elem.find('.formCol_left').hide();
					  $elem.find('.formCol_right').hide();
				  }
				}
				return true;
			}

		}
	}
	return false;
}
$(document).ready(function()
{
	$('.panels h3').live('click', function(e)
	{
		e.stopPropagation();
		accordionRoll($(this), $(this).next('div'), true, true);
	});
});