<script>
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Button } from "../../../../shared-components/button";
</script>

<!-- <a href="/team-finder"> -->
<Tooltip.Root openDelay={100} closeDelay={300}>
  <Tooltip.Trigger>
    <Button variant="outline" size="lg" class="text-xl" disabled>
      Find a team
    </Button>
  </Tooltip.Trigger>
  <Tooltip.Content>
    <p>This feature is not available yet. Please check back later.</p>
  </Tooltip.Content>
</Tooltip.Root>
<!-- </a> -->
